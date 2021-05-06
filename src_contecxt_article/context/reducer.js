export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
      	id: Math.floor(Math.random()*1000),
          	title: action.article.title,
          	body: action.article.body,
        },
      ]
			case "DELETE_ARTICLE":
				return state.filter(article =>article.id !== action.article.id)
    default:
     return state
  }
}
