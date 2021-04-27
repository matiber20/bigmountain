import React from 'react'

export default function ItemDetailContainer({info}) {
    
    return (
        <div>
            <h3>{info.title}</h3>
            <img src={info.thumbnailUrl} alt="" />
            <button>Comprar</button>
        </div>
    )
}
