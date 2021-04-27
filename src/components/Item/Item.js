import React from 'react'



export default function Item({item}) {

    const handleDetail=()=>{
       return alert(` Id: ${item.id}, Titulo: ${item.title}.`)
    }

    return (
        <li>
            <h3>{item.title}</h3>
            <img src={item.thumbnailUrl} alt="" />
            <button onClick={handleDetail}>Detalle</button>
             
        </li>
    )
}
