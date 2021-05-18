import React, { useState } from 'react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function CarritoContainer() {

    const [quantity,setQuantity] = useState(0)
    


    return (
        <div>
            {/* {inCart.map((data)=>(console.log(data)))} */}
            {/* {console.log()} */}
            {console.log(quantity)}
        </div>
    )
}
