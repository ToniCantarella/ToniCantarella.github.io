import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import App from './App.tsx'
import './index.css'
import Home from './ui/home/Home.tsx'
import Page from './ui/common/Page.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "experience",
                element: <Page>Experience</Page>,
            },
            {
                path: "examples",
                element: <div>Examples</div>,
            },
            {
                path: "art",
                element: <div>Art</div>,
            },
            {
                path: "contact",
                element: <div>Contact</div>,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
