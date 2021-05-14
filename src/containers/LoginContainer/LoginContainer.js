import React, { Component } from 'react'
import Login from '../../components/Login/Login'

export default class LoginContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            InputEmail: '',
            InputPassword: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        //evento para el submit
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <Login change={this.handleChange} submit={this.handleSubmit} />
            </div>
        )
    }
}
