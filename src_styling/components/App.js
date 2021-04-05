import React from 'react'
import {MyPoems} from "./MyPoems"
import {styleSheet}  from "../styles"

const divStyle = {
	background:styleSheet.background,
	color:styleSheet.color,
	fontSize:styleSheet.fontSize,
	fontFamily:styleSheet.fontFamily,
	padding:styleSheet.padding
 }


export  class App extends React.Component {
	render() {
		return (
			<div style={divStyle}>
    
			<div>
				<h1>Welcome to My Page </h1>
 			<MyPoems/>
			<footer>Thank you visiting My Page!</footer>
			</div>
			</div>
		)
	}
}



