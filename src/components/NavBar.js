import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";

const NavBar = () => {
  // articles = [];
  // searchNews = (event) => {
  //   console.log(event.target.value);
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   category: PropTypes.string,
  //   pageSize: PropTypes.number,
  // };
  // constructor() {
  //   super();
  //   this.state = {
  //     articles: this.articles,
  //     page: 1,
  //   };
  // }
  // state = {
  //   searchQuery: "",
  //   searchResults: [],
  //   //articles: this.articles,
  // };

  // searchNews = (event) => {
  //   this.setState({ searchQuery: event.target.value });
  // };

  // async newsSearch(event) {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles: parsedData.articles,
  // });
  // this.state.articles.map((article) => {
  //   return <div className="container"></div>;
  // });
  //   this.setState({ searchQuery: event.target.value });

  //   const filteredResults = parsedData.articles.filter((article) => {
  //     article.title
  //       .toLowerCase()
  //       .includes(this.state.searchQuery.toLowerCase());
  //   });
  //   this.setState({
  //     searchResults: filteredResults,
  //   });
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                onChange={(event) => this.searchNews(event)}
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
    </div>
  );
};
export default NavBar;
