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

    res.status(200).json(queryResult);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the blog data." });
  }
};

const searchBlogs = async (req, res) => {
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

    const search_field = req.query.search;

    if (!search_field) {
      return res.status(400).json({ error: "Please provide a search field." });
    }

    const searchResult = blogs.filter(
      (blog) =>
        blog.id.toLowerCase().includes(search_field.toString().toLowerCase()) ||
        blog.title
          .toLowerCase()
          .includes(search_field.toString().toLowerCase()) ||
        blog.image_url
          .toLowerCase()
          .includes(search_field.toString().toLowerCase())
    );

    res.status(200).json(searchResult);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while searching the blog data." });
  }
};

module.exports = { getBlogStats, searchBlogs };
