import React, { useState } from 'react'
import Item from '../Item/Item'

export default function List({items,id}) {
    
    return (
       <ul>
           <Item key={id} item={items} />
       </ul>
    )
}
