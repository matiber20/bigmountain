import React from 'react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function CarritoContainer() {

    const {inCart,number} = useContext(AppContext)
    

    return (
        <div>
            {inCart.map((data)=>(console.log(data)))}
            {console.log(number)}
        </div>
    )
}
