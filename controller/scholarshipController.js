const Scholarship = require("../models/scholarship");

const getScholarships = async (req, res) => {
  try {
    // Get page and limit from query params with defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {};
    
    // Add filters if they exist in query params
    if (req.query.country) {
      filter.country = req.query.country;
    }
    
    if (req.query.scholarshipType) {
      filter.scholarshipType = req.query.scholarshipType;
    }
    
    if (req.query.degreeLevel) {
      filter.degreeLevel = req.query.degreeLevel;
    }
    
    if (req.query.fieldOfStudy) {
      filter.fieldOfStudy = req.query.fieldOfStudy;
    }
    
    if (req.query.gpa) {
      // Filter for scholarships with GPA requirement less than or equal to provided GPA
      filter.gpa = { $lte: parseFloat(req.query.gpa) };
    }

    // Get scholarships with pagination and filters
    const scholarships = await Scholarship.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // Get total count for pagination with filters
    const total = await Scholarship.countDocuments(filter);

    // Send paginated response
    res.json({
      status: "success",
      data: {
        scholarships,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: limit,
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1
        },
        filters: filter
      }
    });
  } catch (error) {
    res.status(500).json({ 
      status: "error",
      message: "Failed to fetch scholarships" 
    });
  }
};

module.exports = { getScholarships };