import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'


export default function Display({number,stock}) {

    const {total} = useContext(AppContext)

    return (
        <div>
            <p>Stock disponible: {stock}</p>
            <p>Cantidad seleccionada: {number}</p>
            <p>Total: ${total}</p>
        </div>
    )
}
