import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** Cor dos nós e ligações, em "r, g, b". */
  rgb?: string;
  /** Nós por 10 000 px² (o total é limitado para manter o desempenho). */
  density?: number;
  /** Os nós próximos do cursor ligam-se a ele. */
  interactive?: boolean;
};

/**
 * Rede de nós ligados que se movem devagar: a "malha" de dados e sistemas que
 * a Nexia liga entre si. Leve (canvas 2D), pausa fora do ecrã e respeita
 * prefers-reduced-motion (desenha um único fotograma estático).
 */
export function NetworkCanvas({
  className,
  rgb = "96, 140, 255",
  density = 0.9,
  interactive = false,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number; p: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let link = 120;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      link = Math.min(150, Math.max(90, Math.sqrt(w * h) / 9));
      const count = Math.min(140, Math.round(((w * h) / 10000) * density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        p: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - d / link) * 0.32})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (interactive) {
          const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (d < link * 1.4) {
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - d / (link * 1.4)) * 0.6})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        const pulse = reduced ? 0.7 : 0.55 + Math.sin(t / 700 + a.p) * 0.35;
        ctx.fillStyle = `rgba(${rgb}, ${pulse})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      if (visible) draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [rgb, density, interactive]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
