import React from 'react'
import {Link} from 'react-router-dom'



export default function Item({item}) {


    return (
        <li>
            <h3>{item.nombre}</h3>
            <p>{item.imagen}</p>
            <Link to={`books/${item.id}`}><button>Detalle</button></Link>
        </li>
    )
}
