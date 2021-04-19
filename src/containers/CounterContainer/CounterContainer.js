import React, { Component } from 'react'
import Counter from '../../components/ItemCount/Counter'

export default class CounterContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            stock:10,
            carrito:0
        }

        this.increment= this.increment.bind(this)
        this.decrement= this.decrement.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    increment(){
        if(this.state.stock > 0){
            this.setState({stock: this.state.stock-1,
                carrito: this.state.carrito+1})
        }
        
    }

    decrement(){
        if(this.state.carrito > 0){
            this.setState({stock: this.state.stock+1,
                        carrito: this.state.carrito-1})
        }
        
    }

    onAdd(){
        if(this.state.carrito !== 0){
            console.log(this.state.carrito);
        }
    }

    componentDidMount(){
        console.log('llamada a api externa o algo asyncrono')
    }

    componentDidUpdate(){
        console.log('Se actualizo');
    }


    render() {
        return (
            <div>
                <h1>En el carrito: {this.state.carrito}</h1>
                <h3>Disponible: { this.state.stock}</h3>
                {
                    this.state.stock === 0 && this.state.stock === 11 ? null : <Counter decrement={this.decrement} increment={this.increment} carrito={this.onAdd} />
                }
            </div>
        )
    }
}
