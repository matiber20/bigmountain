import React, { useState,useEffect } from 'react'
import List from '../../components/ItemList/ItemList'



export default function ItemListContaine() {
    const [item,setItem] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
        return (
            <div>
                <List items={item} />
            </div>
        )
}
