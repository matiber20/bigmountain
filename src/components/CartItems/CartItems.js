import React from 'react'




export default function CartItems({data,total}) {
    return (
        <li>
            <h1>{data.item.title}</h1>
            <h3>Genero: {data.item.categoryId}</h3>
            <h3>Cantidad: {data.item.quantity}</h3>
            <p>Precio unitario: ${data.item.price}</p>
            <h3>Total: ${total}</h3>
        </li>
    )
}
