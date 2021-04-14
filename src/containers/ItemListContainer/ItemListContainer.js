import React, { Component } from 'react'
import Saludo from '../../components/Saludos/Saludo'


export default class ItemListContainer extends Component {

    
    handleClick = () => {
        return alert("Hola!")
    }

    render() {
        return (
            <div>
                <Saludo saludo={this.handleClick} />
            </div>
        )
    }
}
