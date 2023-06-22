import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, name } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            left: "72%",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{name}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.universetoday.com/wp-content/uploads/2023/06/Einstein_cross.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
