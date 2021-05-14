import React from 'react'
import Counter from '../../components/ItemCount/Counter'
// import { useContext } from 'react'
// import AppContext from '../../context/AppContext'

export default function CounterContainer({item}){

    // const {increment,decrement,onAdd} = useContext(AppContext)

           return (
            <div>
                <Counter item={item}/>
            </div> 
        )
    }
