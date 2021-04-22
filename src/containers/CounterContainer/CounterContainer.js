import React, { useState } from 'react'
import Counter from '../../components/ItemCount/Counter'

export default function CounterContainer(props){
    const [number,setNumber] = useState(0)
    const [stock,setStock] = useState(10) 
    const [cart,setCart] = useState(0)

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
            console.log(number);
        }
    }

        return (
            <div>
                <h1>En el carrito: {number}</h1>
                <h3>Disponible: {stock}</h3>
                <h2>{cart}</h2>
                {
                    stock === 0 && stock === 11 ? null : <Counter decrement={decrement} increment={increment} carrito={onAdd} />
                }
            </div>
        )
    }
