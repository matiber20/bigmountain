import React from 'react'
import CategoriaItem from '../CategoriaItem/CategoriaItem'
export default function CategoriasList({items,itemDireccion}) {


    return (
        <ul>
           {console.log(items.id,itemDireccion.street)}
           <CategoriaItem key={items.id} direccion={itemDireccion}/>
       </ul>
    )
}

