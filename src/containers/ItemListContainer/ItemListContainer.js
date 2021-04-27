import React, { useState,useEffect } from 'react'
import List from '../../components/ItemList/ItemList'

const APIURL = "https://jsonplaceholder.typicode.com/photos";

export default function ItemListContaine({query}) {
    const [item,setItem] = useState([])

    useEffect(function(){
        fetch(APIURL)
        .then(res => res.json())
        .then(data => setItem(data.slice(0,10)))
        .catch((err)=>{console.log(err)})
    },[])
        return (
            <div>
               <List items={item} />
            </div>
        )
}
