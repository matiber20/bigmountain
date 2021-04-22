import React from 'react'

export default function Counter({decrement,increment,carrito}) {
    
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={carrito}>Agregar al carrito</button>
        </div>
    )
}
