// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function BlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePublishToggle = () => {
    setIsPublished(!isPublished);
  };

  const handleSavePost = () => {
    // Logika penyimpanan posting ke database atau server
    console.log('Posting disimpan:', {
      title,
      content,
      isPublished,
    });
  };

  return (
    <div>
      <h2>Tulis Posting Baru</h2>
      <div>
        <label>
          Judul:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
      </div>
      <div>
        <label>
          Konten:
          <textarea value={content} onChange={handleContentChange}></textarea>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={handlePublishToggle}
          />
          Publikasikan
        </label>
      </div>
      <button onClick={handleSavePost}>Simpan Posting</button>
    </div>
  );
}

export default BlogEditor;