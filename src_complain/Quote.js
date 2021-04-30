import React,{useContext} from 'react'
import {AppContext} from './Context'
export default function Quote() {
      
     const {author,quote}= useContext(AppContext)
    return (
        <div className='Quote' >
            <p>{quote}</p>
            <cite>--{author}</cite>
        </div>
    )
}
