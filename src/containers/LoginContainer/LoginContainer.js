import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import Visualizer from '../../components/Visualizer/Visualizer'

export default class LoginContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            InputEmail: '',
            InputPassword: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        //Datos del submit
    }

    render() {
        return (
            <div>
                <Login change={this.handleChange} submit={this.handleSubmit} />
                <Visualizer email={this.state.InputEmail} password={this.state.InputPassword} />
            </div>
        )
    }
}
