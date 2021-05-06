import React, { useContext } from "react";
import "./Article.css";
import {ArticleContext} from "../../context/articleContext"

const Article = ({article}) => {
const {saveArticle} =useContext(ArticleContext)
	const deleteArticle=(e)=>{
   saveArticle({type:"DELETE_ARTICLE",article})
	}

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
			<button onClick={deleteArticle}>DELETE</button>
    </div>
  );
};

export default Article;
