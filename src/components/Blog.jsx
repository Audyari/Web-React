// Blog.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import blogData from "../data/blog-data.json";
import "../styles/blog.css";

function Blog() {
  console.log("Blog component rendered");
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch data blog dari sumber data (misalnya, API atau file JSON)
    setBlogPosts(blogData);
  }, []);

  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <strong>Date:</strong> {post.date}
          </p>
          <p>
            <strong>Tags:</strong> {post.tags.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Blog;