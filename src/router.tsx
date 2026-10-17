import { createRouter as createTanStackRouter, createBrowserHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { queryClient } from './queryClient'

const browserHistory = createBrowserHistory()

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    history: browserHistory,
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