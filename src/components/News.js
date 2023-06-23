import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // articles = [];
  //const [articles, props.setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: this.articles,
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   };

  // }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);
    props.setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(parsedData.articles.length);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - NewsSansar`;
  }, []);

  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=1&pageSize=${this.props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false,
  //   // });

  // }

  const handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    // this.setState({
    //   page: this.state.page - 1,
    // });
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading: true,
    //   });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
    // this.setState({
    //   page: this.state.page + 1,
    // });
    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    // this.setState({
    //   page: this.state.page + 1,
    // });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    //  this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setArticles(props.articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(true);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "30px 20px", marginTop: "67px" }}
      >
        NewsSansar Top{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
        Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={props.articles.length}
        next={fetchMoreData}
        hasMore={props.articles.length !== totalResults}
        //loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {props.articles.map((article, index) => {
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
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  //setProgress: PropTypes.func,
};
export default News;
