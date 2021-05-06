import React, { useState,useContext } from "react";
import Article from "../components/Article/Article";
import {ArticleContext} from "../context/articleContext"

const initialState = [
  { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
];

const Articles = () => {
  //const [articles, setArticles] = useState(initialState);
  const {articles}=useContext(ArticleContext)
  return (
    <div>
      {articles.map((article, index) => {
        return <Article article={article} key={index} />;
      })}
    </div>
  );
};

export default Articles;
