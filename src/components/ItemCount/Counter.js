import React from 'react'
import {Link} from 'react-router-dom'

export default function Counter({decrement,increment,carrito,cart}) {
    
    return (
        <div>
        {
        cart !== 0 ? 
            <Link to="/cart"><button onClick={carrito}>Terminar compra</button></Link> 
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
