import React ,{useState,useContext}from "react";
import "./AddArticle.css";
import {ArticleContext} from "../../context/articleContext"

const AddArticle = () => {
  const [article,setArticle]= useState({})
  const {saveArticle}=useContext(ArticleContext)
    
  const handleArticleData = (e) =>{
    setArticle({...article, [e.target.name]:e.target.value})
  }

  const addNewArticle = (e) => {
   e.preventDefault()
  // saveArticle(article)
   console.log(article)
   saveArticle({type:"ADD_ARTICLE",article})
  }

  return (
    <form className="add-article" onSubmit={addNewArticle}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        name="title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        name="body"
        onChange={handleArticleData}
      />
      <button type="submit">Add article</button>
    </form>
  );
};
export default AddArticle;
