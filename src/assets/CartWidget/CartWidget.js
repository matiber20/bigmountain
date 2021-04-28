import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useHistory} from 'react-router-dom'

export default function CartWidget() {
    let history = useHistory()
    return (
        <div onClick={()=>history.push("/cart")}>
          <ShoppingCartOutlinedIcon />
        </div>
    )
}
