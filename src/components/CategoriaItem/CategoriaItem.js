import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoriaItem({item}) {
    return (
        <li>
            {item.categoryId}
            <Link to={`books/${item.id}`}><button>Detalle</button></Link>
        </li>
    )
}
