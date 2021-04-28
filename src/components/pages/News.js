import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const getNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/news`);
      const data = await res.json();
      setArticles(data.articles);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ maxWidth: 1400, margin: "auto" }}>
      <h1>News1</h1>
      {loading ? (
        <h2>loading</h2>
      ) : (
        articles.map((article) => (
          <div
            key={article.title}
            style={{ display: "flex", marginBottom: "2rem" }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{ width: 300, height: 300 }}
            />
            <div style={{ padding: "3rem" }}>
              <h4>{article.title}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
