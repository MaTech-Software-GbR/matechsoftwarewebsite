import AOS from "aos"
import "aos/dist/aos.css"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import ErrorPage from "./ErrorPage"
import "./styles/App.scss"
import "./styles/Base.scss"

AOS.init()

const App = React.lazy(async () => import("./App"))
const Impressum = React.lazy(async () => import("./pages/Impressum"))
const Datenschutz = React.lazy(async () => import("./pages/Datenschutz"))

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    path: "/"
  },
  {
    element: (
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <Impressum />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    path: "/impressum"
  },
  {
    element: (
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <Datenschutz />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    path: "/datenschutz"
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
