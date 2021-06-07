import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const {controlStock, cancel} = require('../../services/services')

export default function Counter({increment,decrement,addToCart,item,number}) {

    const {cart,onAdd,inCart} = useContext(AppContext)

    return (
        <div>
        {
        cart !== false &&  inCart !==item.id ? 
            <>
            <Link to="/cart"><button quantity={number} controlstock={controlStock(number,item.id,item)} name={item.id} onClick={addToCart}>Terminar compra</button></Link> 
            <button onClick={increment} quantity={number} >+</button>
            <button onClick={decrement} quantity={number} >-</button>
            <Link to="/"><button onClick={cancel(number,item.id,item,cart)}>Cancelar</button></Link>
            </>
            :
              <>
              <button onClick={onAdd} quantity={number} name={item.id} >Agregar al carrito</button>
              <button onClick={increment} quantity={number} >+</button>
              <button onClick={decrement} quantity={number} >-</button>
              </>
        }    
        </div>
    )
}
