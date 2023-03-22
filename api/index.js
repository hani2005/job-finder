const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const Job = require("./models/Job.js")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
)
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_URL)

app.get("/", (req, res) => {
  res.send("Here")
})

app.post("/jobs", (req, res) => {
  const job = new Job({
    title: req.body.title,
    location: req.body.location,
    desc: req.body.desc,
    company: req.body.company
  })
  job.save().then((data) => {
    res.json(data)
  })
})

app.get("/jobs", async (req, res) => {
  const jobs = await Job.find()
  res.send(jobs.splice(0, 10))
})

app.listen(3000)
