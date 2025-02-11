const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  university: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ["Full-ride", "Full-tuition", "Partial"],require: false} ,
  degree_level: { type: String, enum: ["Undergraduate", "Graduate"], require: false},
  country: { type: String, required: true },
  deadline: { type: Date, required: false },
  min_gpa: {type: String, require: false},
  major: {type: String, require: false},
  description: {type: String, require: false},
  website_link: {type: String, require: false},
  notion_url: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model("Scholarship", scholarshipSchema);
