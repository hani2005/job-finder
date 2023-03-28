import React from "react"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-2 sm:block sm:p-[1rem] m-auto items-start justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong> Finder
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best canidates.
        </p>
      </div>

      <div className="grid ml-32 sm:ml-0 sm:block sm:mt-10">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">hanim1033@gmail.com</small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
