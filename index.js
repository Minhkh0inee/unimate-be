require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { Client } = require("@notionhq/client");
const scholarshipRoutes = require('./routes/scholarshipRoutes')
const notionRoutes = require('./routes/notionRoutes')

// Connect to MongoDB
connectDB();

const app = express();


// Middleware
app.use(express.json()); // Body parser for JSON

// Routes
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/notion", notionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


