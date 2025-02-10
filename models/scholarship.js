const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  university: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ["Full-ride", "Full-tuition", "Partial"] },
  degree_level: { type: String, enum: ["Undergraduate", "Graduate"] },
  country: { type: String, required: true },
  deadline: { type: Date, required: false },
  notion_url: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model("Scholarship", scholarshipSchema);
