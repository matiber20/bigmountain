import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const { getItemsById } = require("../../services/services");

export default function ItemDetailContainer() {
    const { itemId } = useParams()
    const [item,setItem] = useState({albumId:'',id:'',url:'',thumbnailUrl:''})

    useEffect(()=>{
        getItemsById(itemId)
        .then(data=>setItem(data))
        .catch(err=>console.log(err))
    },[itemId])
    
    return (
        <div>
            <h3>{item.title}</h3>
            <img src={item.thumbnailUrl} alt="" />
            <button>Comprar</button>
        </div>
    )
}
