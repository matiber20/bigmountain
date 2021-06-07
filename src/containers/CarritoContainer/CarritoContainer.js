import React, { useContext, useEffect, useState } from 'react'
import CartList from '../../components/CartList/CartList'
import { AppContext } from '../../context/AppContext'
import { useHistory } from 'react-router-dom'


const { getOrders , purchase } = require('../../services/services')

export default function CarritoContainer() {

    const [cart,setCart] = useState([])
    const {setStock,total,setTotal,setPagarCarrito} = useContext(AppContext)
    let history = useHistory()
    
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
        history.push("/")
    }

    return (
        <div>
            {cart && cart.map((data)=>(<CartList data={data} key={data.id}/>))}
            {total===0?<p>No hay items en el carrito</p>:<><button onClick={handleClick} onLoad={handleLoad}>Finalizar compra ${total}</button>
            <button onClick={purchase}>Cancelar</button></>}
        </div>
    )
}
