import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function JobPage() {
  const [jobInfo, setJobInfo] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://job-finder-7edx.onrender.com/jobs/${id}`).then((response) => {
      response.json().then((data) => {
        setJobInfo(data)
      })
    })
  }, [])
  return (
    <div className="shadow-lg rounded-xl">
      <div className=" p-10">
        <h1 className="text-2xl font-semibold mb-2.5">{jobInfo.title}</h1>
        <span className="text-[1.1rem]">{jobInfo.location}</span>
        <p className="my-2 text-gray-500">{jobInfo.desc}</p>
        <span className="text-blueColor font-bold">{jobInfo.company}</span>
      </div>
      <div className="p-10">
        <h3 className="text-[1.3rem] font-semibold mb-5">Job Details</h3>
        <div className="flex mb-5">
          <h4 className="mr-5">Experience</h4>
          <span className="text-blueColor">{jobInfo.experience}</span>
        </div>
        <div className="flex mb-5">
          <h4 className="mr-5">Salary</h4>
          <span className="text-blueColor">${jobInfo.salary}</span>
        </div>
        <div className="flex mb-5">
          <h4 className="mr-5">Category</h4>
          <span className="text-blueColor">{jobInfo.category}</span>
        </div>
      </div>
      <div className="p-10">
        <h4 className="text-[1.25rem] font-semibold mb-5">Skills</h4>
        <span className="text-gray-800">{jobInfo.skills}</span>
      </div>
    </div>
  )
}

export default JobPage
