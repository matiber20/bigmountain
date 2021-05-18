import React from 'react'
import Item from '../Item/Item'

export default function List({items,id}) {
    
    return (
       <ul>
           <Item llave={id} item={items} />
       </ul>
    )
}
