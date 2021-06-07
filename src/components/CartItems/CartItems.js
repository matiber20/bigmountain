import React, { useContext, useState} from 'react'
import CounterCarrito from '../CounterCarrito/CounterCarrito'
import {AppContext} from '../../context/AppContext'


export default function CartItems({data,parcial}) {

    const {setTotal} = useContext(AppContext)

 
    const [dataQuantity, setDataQuantity] = useState(Math.floor(data.item.quantity))
    const [partialTotal,setPartialTotal] = useState(parcial)

    function sumaParcial(a,b){
        const suma = a*b
        setPartialTotal(suma)
    }

    function increment(){
        if(dataQuantity<data.item.stock){
        setDataQuantity(dataQuantity+1)
        sumaParcial(dataQuantity+1,data.item.price)
        }
        
     }

    function decrement(){
        if(dataQuantity>0){
            setDataQuantity(dataQuantity-1)
            sumaParcial(dataQuantity-1,data.item.price)
        }
    }

    function handleClick(){
        setTotal(partialTotal)
    }

    return (
        <li>
            <h1>{data.item.title}</h1>
            <h3>Genero: {data.item.categoryId}</h3>
            <h3>Cantidad: {dataQuantity}</h3>
            <p>Precio unitario: ${data.item.price}</p>
            <h3>Total: ${partialTotal}</h3>
            <CounterCarrito refrescar={handleClick} incremento={increment} decremento={decrement} />
        </li>
    )
}
