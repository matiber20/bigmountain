import React from 'react'
import CounterContainer from '../../containers/CounterContainer/CounterContainer'



export default function ItemDetail({item}) {

    return (
        <div>
            {console.log(item)}
            <h1>Nombre: {item.name}</h1>
            <p>Telelfono: {item.phone}</p>
            <p>Usename: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Website: {item.website}</p>
            <CounterContainer />
        </div>
    )
}
