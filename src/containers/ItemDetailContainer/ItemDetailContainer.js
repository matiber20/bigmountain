import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

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
            <ItemDetail item={item} />
        </div>
    )
}
