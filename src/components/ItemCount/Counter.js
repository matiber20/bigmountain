import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

export default function Counter({item}) {
    const {increment,decrement,onAdd,cart} = useContext(AppContext)
    
    return (
        <div>
        {
        cart !== false ? 
            <Link to="/cart"><button onClick={onAdd(item)}>Terminar compra</button></Link> 
            :
              <>
              <button onClick={onAdd}>Agregar</button>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
              </>
        }    

        </div>
    )
}
