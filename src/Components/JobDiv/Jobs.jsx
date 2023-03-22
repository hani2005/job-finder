import React, { useState, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"

const Jobs = () => {
  const [jobs, setJobs] = useState("")
  const [search, setSearch] = useState("")

  let url = "http://localhost:3000/jobs"

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
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <div className="firstDev flex justify-between items-center rounded-[8px] gap-[10px] bg-white py-[40px] px-[10px] shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center px-[20px]">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-blue-500 focus:outline-none w-[500px]"
              placeholder="Search jobs by title, location or company name..."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[100px] ml-[2rem]">
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
              className="w-[450px] p-[50px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg mb-10"
            >
              <div>
                <h1 className="text-[16px] font-bold text-textColor group-hover:text-white">
                  {item.title}
                </h1>
                <h6 className="text-textColor text-[16px]">{item.location}</h6>
                <p className="text-[15px] text-textColor pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {item.desc}
                </p>
                <span className="text-[16px] font-semibold text-textColor pt-[1rem] block group-hover:text-white">
                  {item.company}
                </span>
              </div>
              <button className="border-[2px] mt-[2rem] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor">
                Apply Now
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Jobs
