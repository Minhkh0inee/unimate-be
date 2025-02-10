const Scholarship = require("../models/scholarship");

const getScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getScholarships };
