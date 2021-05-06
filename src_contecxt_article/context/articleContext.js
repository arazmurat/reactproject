import React,{createContext,useReducer} from 'react';
import {reducer} from './reducer'



export const ArticleContext = createContext()

const initialState = [
  { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
];

const ArticleProvider = ({children})=>{
	//const [articles,setArticles]=useState(initialState)
	const [articles,saveArticle] = useReducer(reducer, initialState)

	//const saveArticle = article => {
  //  const newArticle = {
  //    id: Math.floor(Math.random()*1000),
  //    title: article.title,
  //    body: article.body,
  //  }
  //  setArticles([...articles, newArticle])
  //}
 return (
	<ArticleContext.Provider value={{articles,saveArticle}}>
	{/*// <ArticleContext.Provider vaule={{articles,dispatch}}/>*/}
	{children}
	</ArticleContext.Provider>
 )

 }

 export default ArticleProvider;