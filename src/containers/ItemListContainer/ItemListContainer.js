import React, { useEffect,useContext } from 'react'
// import List from '../../components/ItemList/ItemList'
import { AppContext } from '../../context/AppContext'

const {getItems} =require('../../services/services')

export default function ItemListContainer() {
    const {item,setItem} = useContext(AppContext)

    useEffect(function(){
       getItems()
        .then(data => setItem(data))
        .catch((err)=>{console.log(err)})
    },[setItem])

        return (
            <div>
              {/* {item && <List items={item} />}  */}
            {console.log(item)}
            </div>
        )
}
