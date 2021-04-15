import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h2>Error 404! Page Not Found</h2>
				go to  <Link to="/">My Home Page </Link>
			</div>
		)
	}
}
