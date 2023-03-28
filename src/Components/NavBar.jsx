import React from "react"
import logo from "./my-logo.png"

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv flex items-center justify-between w-[100%]">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong> Finder
        </h1>
        <img className="w-12" src={logo} alt="" />
      </div>
    </div>
  )
}

export default NavBar
