import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AOS from "aos"
import ErrorPage from "./ErrorPage"
import "aos/dist/aos.css"
import "./styles/Base.scss"
import "./styles/App.scss"

AOS.init()

const App = React.lazy(async () => import("./App"))
const Impressum = React.lazy(async () => import("./pages/Impressum"))
const Datenschutz = React.lazy(async () => import("./pages/Datenschutz"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/impressum",
    element: (
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <Impressum />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/datenschutz",
    element: (
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <Datenschutz />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
