import React from 'react'
import CounterCarrito from '../CounterCarrito/CounterCarrito'


export default function CartItems({data,partialTotal,handleClick,incremento,decremento,dataQuantity}) {


    return (
        <li>
            <h1>{data.item.title}</h1>
            <h3>Genero: {data.item.categoryId}</h3>
            <h3>Cantidad: {dataQuantity}</h3>
            <p>Precio unitario: ${data.item.price}</p>
            <h3>Total: ${partialTotal}</h3>
            <CounterCarrito refrescar={handleClick} incremento={incremento} decremento={decremento} />
        </li>
    )
}
