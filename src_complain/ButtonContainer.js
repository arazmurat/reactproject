import React from 'react'
import {useGlobalContext} from './Context'
export default function ButtonContainer() {
    const {getQuote}=useGlobalContext()
        
    return (
        <div className='ButtonContainer' >
            <button onClick={getQuote} >Generate</button>
        </div>
    )
}
