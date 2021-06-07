import React from 'react'
import CartItems from '../CartItems/CartItems'

export default function CartList({data}) {

    const total = data.item.price * data.item.quantity

    return (
        <ul>
            <CartItems parcial={total} data={data} />
        </ul>   
    )
}
