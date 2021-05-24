import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const { getItemsById } = require("../../services/services");

export default function ItemDetailContainer() {
    const { itemId } = useParams()
    const { item, setItem } = useContext(AppContext)

    useEffect(()=>{
        getItemsById(itemId)
        .then(data=> setItem(data))
        .catch(err=>console.log(err))
    },[setItem,itemId])

    
    return (
        <div>
            {item.map((data)=>(itemId===data.id ? <ItemDetail key={data.id} itemDet={data} /> :null))}
        </div>
    )
}
