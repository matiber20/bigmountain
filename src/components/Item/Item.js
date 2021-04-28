import React from 'react'
import {Link} from 'react-router-dom'



export default function Item({item}) {


    return (
        <li>
            <h3>{item.title}</h3>
            <img src={item.thumbnailUrl} alt="" />
            <Link to={`items/${item.id}`}><button>Detalle</button></Link>
        </li>
    )
}
