import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    // {
    //   source: { id: "independent", name: "Independent" },
    //   author: "Sonia Twigg",
    //   title:
    //     "England vs Australia LIVE: Cricket scorecard and Ashes updates from day two at Edgbaston",
    //   description:
    //     "Following Ben Stokes’ bold declaration late on day one, England will look to skittle Australia on day two at Edgbaston",
    //   url: "http://www.independent.co.uk/sport/cricket/ashes-score-live-england-australia-cricket-b2359411.html",
    //   urlToImage:
    //     "https://static.independent.co.uk/2023/06/17/09/SEI160519522.jpg?quality=75&width=1200&auto=webp",
    //   publishedAt: "2023-06-17T09:34:18Z",
    //   content:
    //     "Josh Hazlewood says Australia must adapt to new Ashes\r\nJosh Hazlewood admitted Australia were still trying to come to terms with a new Ashes after England came out firing to score at five an over on … [+1269 chars]",
    // },
    // {
    //   source: { id: "news24", name: "News24" },
    //   author: "sport",
    //   title:
    //     "Ben Stokes' bold declaration on Day 1 of first Ashes Test 'no surprise' to Bairstow",
    //   description:
    //     'England captain Ben Stokes\' bold declaration on the opening day of the first Ashes Test may have shocked cricket traditionalists, but it was "no surprise" to teammate Jonny Bairstow.',
    //   url: "https://www.news24.com/sport/cricket/international/ben-stokes-bold-declaration-on-day-1-of-first-ashes-test-no-surprise-to-bairstow-20230617",
    //   urlToImage:
    //     "https://cdn.24.co.za/files/Cms/General/d/4480/453bfb9942b6444baef022d8915e4794.jpg",
    //   publishedAt: "2023-06-17T06:00:08+00:00",
    //   content:
    //     "<ul><li>England's Jonny Bairstow was not surprised at captain Ben Stokes declaring the team's innings in the Ashes Test against Australia early.</li><li>Stokes hoped to take at least one Australian w… [+2942 chars]",
    // },
    // {
    //   source: { id: "bbc-sport", name: "BBC Sport" },
    //   author: null,
    //   title: "'England land early punches against cagey Australia'",
    //   description:
    //     "The opening day of the Ashes was a clash of styles hinting at an instant classic of a series, says chief cricket writer Stephan Shemilt.",
    //   url: "http://www.bbc.co.uk/sport/cricket/65930121",
    //   urlToImage:
    //     "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/123F/production/_130117640_gettyimages-1499006946.jpg",
    //   publishedAt: "2023-06-16T21:22:17.6686948Z",
    //   content:
    //     'Just as Jonny Bairstow was finishing speaking to the media at the end of an enthralling opening day of the Ashes series, he was interrupted by a voice coming over the speakers.\r\n"Attention, please. A… [+6845 chars]',
    // },
    // {
    //   source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    //   author: null,
    //   title:
    //     "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //   description:
    //     "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //   url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //   urlToImage:
    //     "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //   publishedAt: "2020-04-27T11:41:47Z",
    //   content:
    //     "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    // },
    // {
    //   source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    //   author: null,
    //   title:
    //     "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //   description:
    //     "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //   url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //   urlToImage:
    //     "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //   publishedAt: "2020-03-30T15:26:05Z",
    //   content:
    //     "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    // },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=5dfeff9303ba42459344afbe6c65ed73&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30px 20px" }}>
          NewsSansar Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article, index) => {
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
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            &rarr; Next
          </button>
        </div>
      </div>
    );
  }
}
