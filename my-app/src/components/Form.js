import React, { Component } from "react"

class Form extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            username: " ",
            lastname: " "

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

    render() {
        return (
            <div className="container">
                <form>
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
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div class="form-group col-md-2">
                            <label>Zipcode</label>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form;