import React, { useState,useEffect } from 'react'
import List from '../../components/ItemList/ItemList'

const {getItems} =require('../../services/services')
export default function ItemListContainer() {
    const [item,setItem] = useState([])

    useEffect(function(){
       getItems()
        .then(data => setItem(data.slice(0,10)))
        .catch((err)=>{console.log(err)})
    },[])
        return (
            <div>
               <List items={item} />
            </div>
        )
}
