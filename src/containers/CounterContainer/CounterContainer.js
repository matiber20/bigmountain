import React, { Component } from 'react'
import Counter from '../../components/Counter/Counter'

export default class CounterContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            stock:10
        }

        this.increment= this.increment.bind(this)
        this.decrement= this.decrement.bind(this)
    }

    increment(){
        this.setState({stock: this.state.stock+1})
    }

    decrement(){
        if(this.state.stock > 0){
            this.setState({stock: this.state.stock-1})
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
                <h3>El numero es: { this.state.stock}</h3>
                {
                    this.state.stock === 10 ? <Counter decrement={this.decrement} /> : <Counter decrement={this.decrement} increment={this.increment} />
                }
            </div>
        )
    }
}
