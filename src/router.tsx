import { createRouter as createTanStackRouter, createHashHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { queryClient } from './queryClient'

const hashHistory = createHashHistory()

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    history: hashHistory,
    context: {
      queryClient,
    },
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}