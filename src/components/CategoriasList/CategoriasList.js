import React from 'react'
import CategoriaItem from '../CategoriaItem/CategoriaItem'
export default function CategoriasList({items}) {


    return (
        <ul>
           <CategoriaItem item={items} />
       </ul>
    )
}

