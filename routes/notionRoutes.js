const express = require("express");
const { fetchNotionScholarships } = require("../controller/notionController");
const router = express.Router();

router.get("/sync", fetchNotionScholarships);

module.exports = router;
