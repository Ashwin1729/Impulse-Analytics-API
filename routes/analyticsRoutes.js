const express = require("express");

const {
  getBlogStats,
  searchBlogs,
} = require("../controllers/analyticsControllers");

const router = express.Router();

router.get("/blog-stats", getBlogStats);
router.get("/blog-search", searchBlogs);

module.exports = router;
