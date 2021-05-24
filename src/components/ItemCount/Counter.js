import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

export default function Counter({increment,decrement,addToCart,item,number}) {

    const {cart,onAdd} = useContext(AppContext)

    return (
        <div>
        {
        cart !== false ? 
            <Link to="/cart"><button quantity={number} name={item.id} onClick={addToCart}>Terminar compra</button></Link> 
            :
              <>
              <button onClick={onAdd} quantity={number} name={item.id} >Agregar</button>
              <button onClick={increment} quantity={number} >+</button>
              <button onClick={decrement} quantity={number} >-</button>
              </>
        }    
        </div>
    )
}
