const express = require("express");
const { getScholarships } = require("../controller/scholarshipController");
const router = express.Router();

router.get("/", getScholarships);

module.exports = router;
