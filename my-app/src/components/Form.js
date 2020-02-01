import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: ' ',
            lastname: ' ',
            email: ' ',
            city: ' ',
            state: 'PA',
            zipcode: ' '

        }
    }
    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
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

    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
        })
    }

    handleZipcodeChange = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Thank you ` + `${this.state.username}` + ` for submitting`)
        console.log(`First name ` + `${this.state.firstname}` + `\n` + `Last name ` + ` ${this.state.lastname}` + `\n` + `Email ` + `${this.state.email}` + `\n` + `City ` + `${this.state.city}` + `\n` + `State` + ` ${this.state.state}` + `\n` + `Zipcode ` + `${this.state.zipcode}`)
        this.setState({
            firstname: ' ',
            lastname: ' ',
            email: ' ',
            city: ' ',
            zipcode: ' '
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="pb-4">Contact us</h2>
                <form className="mb-4">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First name</label>
                            <input type="text" className="form-control"
                                value={this.state.firstname}
                                onChange={this.handleFirstnameChange} />
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
                        <div class="col-md-3 mb-3">
                            <label>State</label>
                            <select className="custom-select" value={this.state.state} onChange={this.handleStateChange} >
                                <option value="PA">PA</option>
                                <option value="NJ">NJ</option>
                                <option value="NY">NY</option>
                            </select>

                        </div>
                        <div className="form-group col-md-2">
                            <label>Zipcode</label>
                            <input type="number" className="form-control"
                                value={this.state.zipcode}
                                onChange={this.handleZipcodeChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>

            </div>
        )
    }
}

export default Form;