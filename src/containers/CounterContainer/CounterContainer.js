import React, { useState } from 'react'
// import Display from '../../components/Display/Display'
import Counter from '../../components/ItemCount/Counter'
// import { useContext } from 'react'
// import AppContext from '../../context/AppContext'


export default function CounterContainer({item}){

    // const {inCart} = useContext(AppContext)

    const [number,setNumber] = useState(0)
    const [stock,setStock] = useState(item.stock)
    const [inCart,setInCart] = useState([])

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

    function addToCart(){
        if(number !== 0 && number > 0){
            setStock(stock)
            setNumber(number)
            // setCart(true)
            setInCart(...inCart, item)        
        // }else{
        //     setCart(false)
        }
    }

    // function addToCart(){
    //     return setInCart(item,number)
    // }

           return (
            <div>
                {/* <Display item={item} cantidad={item.stock}/> */}
                <Counter item={item} increment={increment} decrement={decrement} addToCart={addToCart} />
            </div> 
        )
    }
