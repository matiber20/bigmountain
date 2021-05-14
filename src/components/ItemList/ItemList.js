import React from 'react'
import Item from '../Item/Item'

export default function List({items}) {
    const data = items && items.map((data)=>(data))
    
    return (
       <ul>
           {console.log("la data "+data)}
           {data && data.map((data)=>(<Item key={data.id} item={data} />))}
       </ul>
    )
}
