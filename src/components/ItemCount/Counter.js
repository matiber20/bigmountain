import React from 'react'

export default function Counter({decrement,increment,carrito,cart}) {
    
    return (
        <div>
        {
        cart !== 0 ? 
            <button onClick={carrito}>Terminar compra</button> 
            :
              <>
              <button onClick={carrito}>Agregar</button>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
              </>
        }    

        </div>
    )
}
