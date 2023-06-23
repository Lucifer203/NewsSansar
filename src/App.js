import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const App = () => {
  const pageSize = 9;
  // state = {
  //   progress: 0,
  // };
  const [progress, setProgress] = useState(0);
  // setProgress = (progress) => {
  //   setState({ progress: progress });
  // };
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />

        <NavBar
          articles={articles}
          setArticles={setArticles}
          key={"general"}
          pageSize={pageSize}
          country="in"
          category="general"
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"business"}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"entertainment"}
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"health"}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"science"}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"sports"}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                articles={articles}
                setArticles={setArticles}
                setProgress={setProgress}
                key={"technology"}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
