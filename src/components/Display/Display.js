import React from 'react'

export default function Display({cantidad,item}) {

    return (
        <div>
            <p>Cantidad seleccionada: {cantidad}</p>
            <p>Total: {item.precio*cantidad}</p>
        </div>
    )
}
