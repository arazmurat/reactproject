export default function reduce(state,action){
   
    if(action.type==='CHANGE_BACKGROUND'){
       
        return {...state,background:action.payload}
    }
    if(action.type==='UPDATE_QUOTE'){
        
        const {author,content}= action.payload
        return {...state,author:author,quote:content}
    }
    return state
}