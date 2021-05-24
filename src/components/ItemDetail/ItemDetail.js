import React from 'react'
import CounterContainer from '../../containers/CounterContainer/CounterContainer'



export default function ItemDetail({itemDet}) {

    return (
        <div>
            <h1>Titulo: {itemDet.title}</h1>
            <p>Categoria: {itemDet.categoryId}</p>
            <p>Precio: {itemDet.price}</p>
            <p>Descripcion: {itemDet.description}</p>
            <CounterContainer item={itemDet} />
        </div>
    )
}
