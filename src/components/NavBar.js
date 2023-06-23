import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";

const NavBar = (props) => {
  // const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const searchNews = async (event) => {
    event.preventDefault();
    //  props.setProgress(10);
    setSearchQuery(event.target.value);
    const searchUrl = `https://newsapi.org/v2/everything?q=${event.target.value}&from=2023-05-28&sortBy=popularity&apiKey=5dfeff9303ba42459344afbe6c65ed73`;
    //  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    //  setLoading(true);
    let data = await fetch(searchUrl);
    // props.setProgress(30);

    let parsedData = await data.json();

    console.log("parsedData", parsedData);
    // props.setProgress(70);
    if (parsedData.status !== "error") {
      props.setArticles(parsedData.articles);
    }
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // if (event.target.value.length == 0) {
    //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${page}&pageSize=${props.pageSize}`;
    //   console.log("true");
    //   data = await fetch(searchUrl);
    //   parsedData = await data.json();
    //   props.setArticles(parsedData.articles);
    // }
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    // props.setProgress(100);
    // const filteredResults = props.articles.filter((article) => {
    //   article.title.toLowerCase().includes(searchQuery.toLowerCase());
    // });
    // setFilteredArticles(filteredResults);
  };

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
        // style={{ position: "fixed", zIndex: "1" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            NewsSansar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={searchNews}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* {this.state.searchResults.length > 0 ? (
          <div className="search-results">
            <h2>Search Results</h2>
            {this.state.searchResults.map((article, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={article.title ? article.title.slice(0, 45) : ""}
                    description={
                      article.description
                        ? article.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    name={article.source.name}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h2>Nothing Found</h2>
        )} */}

      {/* {filteredArticles.length > 0 ? (
        <div className="search-results">
          <h2>Search Results</h2>
          {filteredArticles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title ? article.title.slice(0, 45) : ""}
                description={
                  article.description ? article.description.slice(0, 88) : ""
                }
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                name={article.source.name}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2>Nothing Found</h2>
      )} */}
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
