import React, { useState, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"

const Jobs = () => {
  const [jobs, setJobs] = useState("")
  const [search, setSearch] = useState("")

  let url = "https://job-finder-7edx.onrender.com/jobs"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data)
      })
  }, [url])

  const arrayJob = Object.values(jobs)

  return (
    <div>
      <div className="searchDiv grid gap-10 bg-blueColor rounded-[10px] p-[3rem]">
        <div className="firstDev flex justify-between items-center rounded-[8px] gap-[10px] bg-white py-[40px] px-[10px] shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center px-[20px]">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-blue-500 focus:outline-none w-[500px] sm:w-auto"
              placeholder="Search jobs by title, location or company name..."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[100px] ml-[2rem] sm:ml-0 sm:flex sm:flex-col">
        {arrayJob
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.location.toLowerCase().includes(search.toLowerCase()) ||
              item.company.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              key={item._id}
              className="w-[450px] sm:w-auto p-[50px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700d mb-10"
            >
              <div>
                <h1 className="text-[18px] font-bold text-textColor group-hover:text-white">
                  {item.title}
                </h1>
                <h6 className="text-textColor text-[16px]">{item.location}</h6>
                <p className="text-[15px] text-textColor pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {item.desc}
                </p>
                <span className="text-[16px] font-semibold text-blueColor pt-[1rem] block group-hover:text-white">
                  {item.company}
                </span>
              </div>
              <Link
                to={`/jobs/${item._id}`}
                className="border-[2px] mt-[2rem] rounded-[10px] p-[10px] w-full text-[14px] font-semibold text-black hover:bg-blueColor hover:text-white justify-center flex"
              >
                Apply Now
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Jobs
