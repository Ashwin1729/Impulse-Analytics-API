const axios = require("axios");
const _ = require("lodash");

const getBlogStats = async (req, res) => {
  try {
    const { data: blogData } = await axios.get(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      {
        headers: {
          "x-hasura-admin-secret":
            "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
        },
      }
    );

    const blogs = blogData.blogs;

    const totalBlogs = blogs.length;
    const longestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);
    const privacyBlogs = _.filter(blogs, (blog) =>
      _.includes(blog.title.toLowerCase(), "privacy")
    );
    const uniqueBlogTitles = _.uniqBy(blogs, "title");

    const queryResult = {
      totalBlogs,
      longestBlogTitle: longestTitleBlog.title,
      privacyBlogsLength: privacyBlogs.length,
      uniqueBlogTitles: uniqueBlogTitles.map((blog) => blog.title),
    };

    res.json(queryResult);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the blog data." });
  }
};

const searchBlogs = async (req, res) => {};

module.exports = { getBlogStats, searchBlogs };
