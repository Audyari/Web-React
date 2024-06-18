import '../styles/Article.css';

// eslint-disable-next-line react/prop-types
function Article({ title, content }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <div className="article-content">
        {content}
      </div>
    </div>
  );
}

export default Article;