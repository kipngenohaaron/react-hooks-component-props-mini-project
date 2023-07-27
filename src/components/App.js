import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import data from "../data/blog";

const App = () => {
  const { name, image, about, posts } = data;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;
