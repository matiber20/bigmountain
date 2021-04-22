import React from 'react'
import Item from '../Item/Item'

export default function List({items}) {
    return (
       <ul>
           {
               items.map((item) => {
               return <Item key={item.id} item={item} />})
           }
       </ul>
    )
}
