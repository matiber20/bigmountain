import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoriaItem({direccion,item}) {
    return (
        <li>
            Street: {direccion.street}, City: {direccion.city}
            <Link to={`books/${item.id}`}><button>Detalle</button></Link>
        </li>
    )
}
