import React, { Component } from 'react'

export default class Menu extends Component {
	constructor(props) {
		super(props)
	
		
	}
	handleClick=(e) =>{
		const text = e.target.value
		this.props.chooseVideo(text)
	}

	render() {
		return (
			<form onClick={this.handleClick}>
      <input type="radio" name="src" value="fast"/>Fast
			<input type="radio" name="src" value="slow"/>Slow
			<input type="radio" name="src" value="cute"/>Cute
			<input type="radio" name="src" value="eek"/>Eek
			</form>
				
		
		)
	}
}
