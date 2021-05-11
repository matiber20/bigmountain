import React from 'react'
import Counter from '../../components/ItemCount/Counter'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function CounterContainer(props){

    const {stock,setStock,number,setNumber,cart,setCart} = useContext(AppContext)

    function increment(){
        if(stock > 0){
            setStock(stock-1)
            setNumber(number+1)
        }
        
    }

    function decrement(){
        if(number > 0){
            setStock(stock+1)
            setNumber(number-1)
        }
        
    }

    function onAdd(){
        if(number !== 0){
            setCart(number)
        }else{
            setCart(0)
        }
    }

        return (
            <div>
                <h1>En el carrito: {number}</h1>
                <h3>Disponible: {stock}</h3>
                <h2>{cart}</h2>
                <Counter decrement={decrement} increment={increment} carrito={onAdd} cart={cart}/>
            </div>
        )
    }
