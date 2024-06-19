// Blog.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import blogData from "../data/blog-data.json";
import "../styles/blog.css"

function BlogSearch() {
  console.log("Komponen Blog telah dirender");
  const [semuaPostingan] = useState(blogData);
  const [postinganTerfilter, setPostinganTerfilter] = useState(blogData);
  const [tagsYangDipilih, setTagsYangDipilih] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPostingan, setTotalPostingan] = useState(0); // Tambahkan state untuk total postingan

  const handleFilterTags = (tag) => {
    if (tagsYangDipilih.includes(tag)) {
      setTagsYangDipilih(tagsYangDipilih.filter((t) => t !== tag));
    } else {
      setTagsYangDipilih([...tagsYangDipilih, tag]);
    }
  };

  useEffect(() => {
    let filteredPosts = semuaPostingan;

    // Filter berdasarkan tags
    if (tagsYangDipilih.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        tagsYangDipilih.every((tag) => post.tag.includes(tag))
      );
    }

    // Filter berdasarkan judul
    if (searchTerm.trim() !== "") {
      filteredPosts = filteredPosts.filter((post) =>
        post.judul.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setPostinganTerfilter(filteredPosts);
    setTotalPostingan(filteredPosts.length); // Perbarui state total postingan
  }, [semuaPostingan, tagsYangDipilih, searchTerm]);

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
        <input
          type="text"
          placeholder="Cari berdasarkan judul..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <p>Total Postingan: {totalPostingan}</p> {/* Tampilkan total postingan */}
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

export default BlogSearch;