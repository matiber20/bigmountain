import React from 'react'
import CounterContainer from '../../containers/CounterContainer/CounterContainer'



export default function ItemDetail({item}) {

    return (
        <div>
            <h1>Nombre: {item.title}</h1>
            <p>Telelfono: {item.categoryId}</p>
            <p>Usename: {item.stock}</p>
            <p>Email: {item.price}</p>
            <p>Website: {item.description}</p>
            <CounterContainer item={item} />
        </div>
    )
}
