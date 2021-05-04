import React from 'react'
import Counter from '../ItemCount/Counter'
// import { Link } from 'react-router-dom'

export default function CategoriaItem({direccion}) {
    return (
        <li>
            Street: {direccion.street}, City: {direccion.city}
            <Counter />
        </li>
    )
}
