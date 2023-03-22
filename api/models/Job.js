const mongoose = require("mongoose")
const { Schema } = mongoose

const JobSchema = new Schema({
  title: String,
  location: String,
  desc: String,
  company: String
})

const JobModel = mongoose.model("Job", JobSchema)

module.exports = JobModel
