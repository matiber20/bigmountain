import React, { useEffect,useContext, useState } from 'react'
import List from '../../components/ItemList/ItemList'
import { AppContext } from '../../context/AppContext'

const {getItems} =require('../../services/services')

export default function ItemListContainer() {
    const {item,setItem} = useContext(AppContext)
    // const [item,setItem] = useState([])

    useEffect(function(){
       getItems()
        .then(data => setItem(data))
        .catch((err)=>{console.log(err)})
    },[setItem])

        return (
            <div>
              {item && item.map((data)=>(<List items={data} id={data.id} />))}
            </div>
        )
}
