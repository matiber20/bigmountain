import React from 'react'

export default function CounterCarrito({incremento,decremento,refrescar}) {
    return (
        <div>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
            <button onClick={refrescar}>Actualizar</button>
        </div>
    )
}
