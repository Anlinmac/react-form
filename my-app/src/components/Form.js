import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);

        this.state = {
            username: ' ',
            lastname: ' ',
            email: ' ',
            city: ' ',
            zipcode: ' '

        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleZipcodeChange = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
       alert (`Thank you `+ `${this.state.username}`+ ` for submitting`)
    }

    render() {
        return (
            <div className="container">
                <h2 className="pb-4">Contact us</h2>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First name</label>
                            <input type="text" className="form-control"
                                value={this.state.username}
                                onChange={this.handleUsernameChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last name</label>
                            <input type="text" className="form-control"
                                value={this.state.lastname}
                                onChange={this.handleLastnameChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                            value={this.state.email}
                            onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control"
                            value={this.state.city}
                            onChange={this.handleCityChange} />
                        </div>

                        <div class="form-group col-md-2">
                            <label>Zipcode</label>
                            <input type="number" className="form-control"
                            value={this.state.zipcode}
                            onChange={this.handleZipcodeChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form;