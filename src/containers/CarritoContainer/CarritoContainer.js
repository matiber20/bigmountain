import React, { useEffect, useState } from 'react'
import CartList from '../../components/CartList/CartList'


const { getOrders , purchase } = require('../../services/services')

export default function CarritoContainer() {

    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    
    useEffect(function(){
        getOrders()
         .then(function(data){
             setCart(data)
            handleLoad(data)})
         .catch((err)=>{console.log(err)})
         return ()=>{
             getOrders()
         }
     },[])

    function handleLoad(e){
    const lista = []
    let totalPagar=0
    e.map((data)=>(lista.push(data.total)))
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];  
        totalPagar += element
        setTotal(totalPagar)
    }
    }

    function handleClick(){
        purchase()
    }

    return (
        <div>
            {cart && cart.map((data)=>(<CartList data={data} />))}
            <button onClick={handleClick} onLoad={handleLoad}>Finalizar compra ${total}</button>
        </div>
    )
}
