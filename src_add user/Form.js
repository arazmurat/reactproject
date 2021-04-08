import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             job: ''
        }

        this.initialState = this.state
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.updateNames(this.state)
        this.setState(this.initialState)
    }

    render() {
        
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={this.handleChange}
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    onChange={this.handleChange}
                     />
                <button type="submit">
                    Submit
                </button>
            </form>
            <h2>Entered name: {this.state.name}</h2>
            <h2>Entered job: {this.state.job}</h2>
            </div>
        );
    }
}

export default Form;
