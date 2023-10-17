const express = require("express");

const {
  getBlogStats,
  searchBlogs,
} = require("../controllers/analyticsControllers");

const router = express.Router();

// REST API routes for blog analytics and search

router.get("/blog-stats", getBlogStats);
router.get("/blog-search", searchBlogs);

module.exports = router;
