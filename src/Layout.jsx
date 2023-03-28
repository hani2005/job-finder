import React from "react"
import { Outlet } from "react-router-dom"
import CopyRight from "./Components/CopyRight"
import Footer from "./Components/Footer"

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
      <CopyRight />
    </>
  )
}

export default Layout
