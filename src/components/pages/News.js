import React, { useState, useEffect } from "react"
import Pagination from "@material-ui/lab/Pagination"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: { maxWidth: 1400, margin: "auto", minHeight: "100vh" },
  paginationContainer: {
    margin: "3rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  paginationRoot: {
    margin: "1rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const News = () => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const getNews = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:5000/api/news?page=${page}`)
      const data = await res.json()
      setArticles(data.articles)
      setPages(data.pages)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    getNews(page)
    // eslint-disable-next-line
  }, [page])

  return (
    <div className={classes.container}>
      <h1>News1</h1>
      {!loading && pages > 1 && (
        <div className={classes.paginationContainer}>
          <div className={classes.paginationRoot}>
            <Pagination count={pages} page={page} onChange={handleChange} />
          </div>
        </div>
      )}
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
      {!loading && pages > 1 && (
        <div className={classes.paginationContainer}>
          <div className={classes.paginationRoot}>
            <Pagination count={pages} page={page} onChange={handleChange} />
          </div>
        </div>
      )}
    </div>
  )
}

export default News
