// SimpleExample.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../styles/SimpleExample.css"; // Import file CSS

function SimpleExample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="simple-example">
      <h1 className="title">Simple Example</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleExample;