import React, { Component } from 'react'
import SelectUSState from 'react-select-us-states';

class Form extends Component {
    constructor(props) {
        super(props)

        // this.setNewValue = this.setNewValue.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            state: '',
            zipCode: ''

        }
    }
    handleFirstnameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastName: event.target.value
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

    handleStateChange = (usState) => {
        this.setState({
            state: usState
        })
    }

    // setNewValue(newValue) {
    //     this.setState({
    //                 usstate: newValue.target.value
    //             })
    //     console.log('this is the State code:' + newValue);
    // }

    handleZipcodeChange = (event) => {
        this.setState({
            zipCode: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Thank you ` + `${this.state.username}` + ` for submitting`)
        console.log(`First name ` + `${this.state.firstName}` + `\n` + `Last name ` + ` ${this.state.lastName}` + `\n` + `Email ` + `${this.state.email}` + `\n` + `City ` + `${this.state.city}` + `\n` + `State` + ` ${this.state.state}` + `\n` + `Zipcode ` + `${this.state.zipCode}`)
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
            <div className="container w-50">
                <h2 className="pb-4">Contact us</h2>
                <form className="mb-4">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First name</label>
                            <input type="text" className="form-control"
                                value={this.state.firstName}
                                onChange={this.handleFirstnameChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last name</label>
                            <input type="text" className="form-control"
                                value={this.state.lastName}
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
                        <div className="form-group col-md-5">
                            <label>City</label>
                            <input type="text" className="form-control"
                                value={this.state.city}
                                onChange={this.handleCityChange} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label> State </label>
                            <SelectUSState id="myId"
                                className="custom-select"
                                value={this.state.usState}
                                onChange={this.handleStateChange} />

                        </div>
                        <div className="form-group col-md-3 ">
                            <label>Zipcode</label>
                            <input type="number" className="form-control"
                                value={this.state.zipCode}
                                onChange={this.handleZipcodeChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>

            </div >
        )
    }
}

export default Form;