import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { AppContext } from '../../context/AppContext';

const { getItemsById } = require("../../services/services");

export default function ItemDetailContainer() {
    const { itemId } = useParams()
    const { item, setItem } = useContext(AppContext)

    useEffect(()=>{
        getItemsById(itemId)
        .then(data=> setItem(data))
        .catch(err=>console.log(err))
    },[itemId])
    
    return (
        <div>
            {item && <ItemDetail item={item} />}  
        </div>
    )
}
