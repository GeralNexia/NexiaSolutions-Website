import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { queryClient } from './queryClient'
import './styles.css'

// Lógica para recuperar a rota correta caso o GitHub Pages redirecione pelo 404.html
(function () {
  const l = window.location
  const search = l.search
  if (search && search.startsWith('?p=/')) {
    const decoded = search
      .slice(3)
      .split('&')[0]
      .replace(/~and~/g, '&')
    window.history.replaceState(
      null,
      null,
      l.pathname.slice(0, -1) + decoded + l.hash
    )
  }
})()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}