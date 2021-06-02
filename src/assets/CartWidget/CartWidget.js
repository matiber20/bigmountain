import React, {useContext} from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useHistory} from 'react-router-dom'
import { AppContext } from "../../context/AppContext";


export default function CartWidget() {
    let history = useHistory()

    const {stock,pagarCarrito} = useContext(AppContext)

    return (
        <div onClick={()=>history.push("/cart")}>
          <ShoppingCartOutlinedIcon />
          {stock}
          <p>${pagarCarrito}</p>
        </div>
    )
}
