const { notion, databaseId } = require("../config/notionClient");
const Scholarship = require("../models/scholarship");
const { transformNotionToScholarship } = require("../utils/notionHelper");

const fetchNotionScholarships = async (req, res) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    const scholarships = response.results.map(transformNotionToScholarship);

    await Scholarship.insertMany(scholarships, { ordered: false }).catch(() => {}); // Ignore duplicate errors

    res.status(200).json({ message: "Scholarships synced successfully", count: scholarships.length });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { fetchNotionScholarships };
