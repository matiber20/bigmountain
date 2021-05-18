import React from 'react'
import {Link} from 'react-router-dom'



export default function Item({item,llave}) {

    return (
        <li key={llave}>
            <h3>Titulo: {item.title}</h3>
            <p>Descripcion: {item.description}</p>
            <p>Precio: ${item.price}</p>
            <Link to={`books/${item.id}`}><button>Detalle</button></Link>
        </li>
    )
}
