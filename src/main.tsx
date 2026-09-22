import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/router'
import { routeTree } from './routeTree.gen'
import { queryClient } from './queryClient'
import './styles.css'

// O Hash History é a forma mais limpa e estável para SPAs no GitHub Pages (evita 404s sem truques)
const hashHistory = createHashHistory()

const router = createRouter({
  routeTree,
  history: hashHistory,
  context: {
    queryClient,
  },
})

declare module '@tanstack/router' {
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