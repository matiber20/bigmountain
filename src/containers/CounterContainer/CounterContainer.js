import React, { useContext, useState } from 'react'
import Display from '../../components/Display/Display'
import Counter from '../../components/ItemCount/Counter'
import { AppContext } from '../../context/AppContext'

const {creatOrder} = require('../../services/services')

export default function CounterContainer({item}){

    const {inCart,quantity,setCart,setTotal} = useContext(AppContext)

    const [number,setNumber] = useState(0);
    const [stock,setStock] = useState(item.stock);


    function increment(){
        if(stock > 0){
            setStock(stock-1)
            setNumber(number+1)
            partialTotal(number+1,item.price)
        }
        
    }

    function decrement(){
        if(number > 0){
            setStock(stock+1)
            setNumber(number-1)
            partialTotal(number-1,item.price)
        }
        
    }

    function partialTotal(a,b){
        const suma = a*b
        setTotal(suma)    
    }   

    //addToCart deberia crear una lista de objetos

    function addToCart(){
        creatOrder({item:{id: inCart, quantity: quantity,price: item.price,...item},buyer:{userId:"Usuario", email: "email@email.com"},total: item.price*quantity})
        setCart(false)
    }


    return (
            <div>
                <Display item={item} stock={item.stock} number={number}  />
                <Counter number={number} item={item} increment={increment} decrement={decrement} addToCart={addToCart} />
            </div> 
        )
    }
