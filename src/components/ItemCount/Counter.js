import React from 'react'

export default function Counter({decrement,increment,carrito,cart}) {
    
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {console.log("aca"+cart)}
            {
              carrito.cart !== 0 ? <button onClick={carrito}>Agregar</button>:<button onClick={carrito}>Terminar compra</button>
            }
            
        </div>
    )
}
