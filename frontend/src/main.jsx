import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/index'
import ContactPage from './pages/contact'
import FaqPage from './pages/faq'
import HistoryPage from './pages/history'
import SpotlightPage from './pages/spotlight'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/spotlight',
    element: <SpotlightPage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
  {
    path: '/faq',
    element: <FaqPage />,
  },
])

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
