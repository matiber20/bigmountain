import React, { Component } from 'react'
import Login from '../../components/Login/Login'


export default class LoginContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            InputEmail: '',
            InputPassword: ''
        }
    }

    handleChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <Login change={this.handleChange} />
            </div>
        )
    }
}
