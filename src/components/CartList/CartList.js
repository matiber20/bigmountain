import React from 'react'
import CartItems from '../CartItems/CartItems'

export default function CartList({data, handleChange}) {

    const total = data.item.price * data.item.quantity

    return (
        <ul>
            <CartItems onChange={handleChange} total={total} data={data} />
        </ul>   
    )
}
