import React from 'react'

export default function ChoosePicture(props) {
	return (
		<div>
			  <h1>Cute Pictures</h1>
        <img src={props.path} alt="cute"/> <br/>
				<button onClick={props.start}>Start</button><br/>
				<button onClick={props.stop}>Stop</button>

		</div>
	)
}
