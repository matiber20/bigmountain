import React from 'react'
import CartItems from '../CartItems/CartItems'

export default function CartList({data}) {

    const total = data.item.price * data.item.quantity

    return (
        <ul>
            <CartItems total={total} data={data} />
        </ul>   
    )
}
