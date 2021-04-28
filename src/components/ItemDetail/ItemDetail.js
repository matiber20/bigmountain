import React from 'react'

export default function ItemDetail({item}) {
    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.thumbnailUrl} alt=""/>
        </div>
    )
}
