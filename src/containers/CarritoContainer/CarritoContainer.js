import React, { useContext, useEffect, useState } from 'react'
import CartList from '../../components/CartList/CartList'
import { AppContext } from '../../context/AppContext'



const { getOrders , purchase } = require('../../services/services')

export default function CarritoContainer() {

    const [cart,setCart] = useState([])
    const {setStock,total,setTotal,setPagarCarrito} = useContext(AppContext)
    
    useEffect(function(){
        getOrders()
         .then(function(data){
            setCart(data)
            handleLoad(data)})
         .catch((err)=>{console.log(err)})
     },[])

    function handleLoad(e){
    const lista = []
    let totalPagar=0
    e.map((data)=>(lista.push(data.total)))
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];  
        totalPagar += element
        setTotal(totalPagar)
        setStock(lista.length)
    }
    setPagarCarrito(totalPagar)
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
