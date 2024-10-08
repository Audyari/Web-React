// Blog.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import blogData from "../data/blog-data.json";
import "../styles/blog.css"


function Blog() {
  console.log("Komponen Blog telah dirender");
  const [semuaPostingan] = useState(blogData);
  const [postinganTerfilter, setPostinganTerfilter] = useState(blogData);
  const [tagsYangDipilih, setTagsYangDipilih] = useState([]);

  const handleFilterTags = (tag) => {
    if (tagsYangDipilih.includes(tag)) {
      setTagsYangDipilih(tagsYangDipilih.filter((t) => t !== tag));
    } else {
      setTagsYangDipilih([...tagsYangDipilih, tag]);
    }
  };

  useEffect(() => {
    if (tagsYangDipilih.length === 0) {
      setPostinganTerfilter(semuaPostingan);
    } else {
      setPostinganTerfilter(
        semuaPostingan.filter((post) =>
          tagsYangDipilih.every((tag) => post.tag.includes(tag))
        )
      );
    }
  }, [semuaPostingan, tagsYangDipilih]);

  return (
    <div className="blog-container">
      <h1>Blog Saya</h1>
      <div className="filter-container">
        <h3>Filter Berdasarkan Tag:</h3>
        {[...new Set(semuaPostingan.flatMap((post) => post.tag))].map((tag) => (
          <button
            key={tag}
            className={`filter-button ${tagsYangDipilih.includes(tag) ? "active" : ""}`}
            onClick={() => handleFilterTags(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {postinganTerfilter.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.judul}</h2>
          <p>{post.konten}</p>
          <p>
            <strong>Tanggal:</strong> {post.tanggal}
          </p>
          <p>
            <strong>Tag:</strong> {post.tag.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Blog;