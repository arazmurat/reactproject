import React,{useContext,useReducer,useEffect, createContext} from 'react'
import reduce from './reduce'

const AppContext=createContext()

const defaultState={
    background:'#f17420',
    quote:' This is a quote from Mr.Ridvan ',
    author:'ridvan saman'
}

function AppContextProvider({children}) {
 
    const[state,dispatch]=useReducer(reduce,defaultState)
   
const randomBackground=()=>{
    let randomColor =Math.floor(Math.random()*(256*256*256))
    randomColor=randomColor.toString(16)
    randomColor='#'+randomColor
    dispatch({type:'CHANGE_BACKGROUND',payload:randomColor})
}
const getQuote=()=>{
    fetch('https://api.quotable.io/random')
    .then(res=>res.json())
    .then(respond=>{
        randomBackground()
        return dispatch({type:'UPDATE_QUOTE',payload:respond})
    })
    
}


useEffect(()=>{
randomBackground()
getQuote()
},[])


    return (
        <AppContext.Provider value={{
            ...state,
            getQuote}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppContextProvider}