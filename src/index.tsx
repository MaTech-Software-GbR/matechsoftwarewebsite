import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import "./styles/App.scss"
import "./styles/Base.scss"

const App = React.lazy(async () => import("./App"))
const Impressum = React.lazy(async () => import("./pages/Impressum"))
const Datenschutz = React.lazy(async () => import("./pages/Datenschutz"))
const ErrorPage = React.lazy(async () => import("./ErrorPage"))

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>MaTech lädt...</div>}>
        <Routes>
          <Route element={<ErrorPage />} path="*" />
          <Route element={<App />} path="/" />
          <Route element={<Impressum />} path="/impressum" />
          <Route element={<Datenschutz />} path="/datenschutz" />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
)
