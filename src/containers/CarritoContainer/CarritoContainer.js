import React from 'react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function CarritoContainer() {

    const valueContext = useContext(AppContext)



    return (
        <div>
            {console.log(valueContext)}
        </div>
    )
}
