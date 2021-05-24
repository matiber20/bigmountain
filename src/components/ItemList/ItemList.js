import React from 'react'
import Item from '../Item/Item'

export default function List({items}) {
    
    return (
       <ul>
           <Item item={items} />
       </ul>
    )
}
