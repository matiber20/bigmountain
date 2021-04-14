import React from 'react'

export default function Saludo(props) {
    return (
        <div>
            <button onClick={props.saludo}>Click para saludo por alert!</button>
        </div>
    )
}
