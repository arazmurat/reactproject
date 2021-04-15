import React, { Component } from 'react'

export default class Message extends Component {
	render() {
		return (
			<div>
				<h3>Message is comming from mesasge ID {this.props.match.params.id}</h3>
			</div>
		)
	}
}
