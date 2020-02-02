import React, { Component } from 'react'
import SelectUSState from 'react-select-us-states';
import 'font-awesome/css/font-awesome.min.css';
import "./Form.css"

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            state: '',
            zipCode: ''

        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleStateChange = (usState) => {
        this.setState({
            state: usState
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you ` + `${this.state.firstName}` + ` for submitting`)
        console.log(`First name: ` + `${this.state.firstName}` + `\n` + `Last name:` + ` ${this.state.lastName}` + `\n` + `Email: ` + `${this.state.email}` + `\n` + `City: ` + `${this.state.city}` + `\n` + `State:` + ` ${this.state.state}` + `\n` + `Zip Code: ` + `${this.state.zipCode}`)
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            state: '',
            city: '',
            zipCode: ''
        })
    }

    render() {
        return (
            <div className="container box">
                <h2 className="py-4 text-center font">Contact us <i className="fa fa-paper-plane"></i></h2>
                <form className="mb-4">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First name</label>
                            <input
                                name="firstName"
                                type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={event => this.handleInput(event)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last name</label>
                            <input
                                name="lastName"
                                type="text"
                                className="form-control"
                                value={this.state.lastName}
                                onChange={event => this.handleInput(event)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={event => this.handleInput(event)}  />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label>City</label>
                            <input
                                name="city"
                                type="text"
                                className="form-control"
                                value={this.state.city}
                                onChange={event => this.handleInput(event)} />
                        </div>
                        <div className="col-md-4 form-group">
                            <label> State </label>
                            <SelectUSState id="myId"
                                className="custom-select"
                                value={this.state.usState}
                                onChange={this.handleStateChange} />

                        </div>
                        <div className="form-group col-md-3 ">
                            <label>Zip Code</label>
                            <input
                                name="zipCode"
                                type="number"
                                className="form-control"
                                value={this.state.zipCode}
                                onChange={event => this.handleInput(event)}  />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>

            </div >
        )
    }
}

export default Form;