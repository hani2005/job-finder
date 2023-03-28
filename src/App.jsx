import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import JobPage from "./pages/JobPage"

const App = () => {
  return (
    <div className="w-[1000px] sm:w-auto sm:flex sm:flex-col overflow-hidden m-auto bg-white">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
