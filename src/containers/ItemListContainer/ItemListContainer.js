import React, { useState,useEffect,useContext } from 'react'
import List from '../../components/ItemList/ItemList'
import AppContext from '../../context/AppContext'


const {getItems} =require('../../services/services')
export default function ItemListContainer() {
    const {item,setItem} = useContext(AppContext)
    // const [item,setItem] = useState([])

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
