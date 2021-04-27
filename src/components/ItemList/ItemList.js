import React from 'react'
import Item from '../Item/Item'

export default function List({items}) {
    const data = items.map((item)=>(item))
    
    return (
       <ul>
           {data.map((data)=>(<Item key={data.id} item={data} />))}
       </ul>
    )
}
