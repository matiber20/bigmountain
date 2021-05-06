import React from 'react'
import CategoriaItem from '../CategoriaItem/CategoriaItem'
export default function CategoriasList({items,itemDireccion}) {


    return (
        <ul>
           <CategoriaItem key={items.id} item={items} direccion={itemDireccion}/>
       </ul>
    )
}

