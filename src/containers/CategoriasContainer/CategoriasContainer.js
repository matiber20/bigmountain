import React, {useState,useEffect} from 'react'
import CategoriasList from '../../components/CategoriasList/CategoriasList'



const { getItems } = require('../../services/services')

export default function CategoriasContainer() {
    const [item,setItem] = useState();
    // const [categorias,setCategorias] = useState({})
    
    useEffect(()=>{
        getItems()
        .then(data=>setItem(data))
        .catch(err=>console.log(err))
        return()=>{
            getItems()
        }
    },[])
    
    return (
        <div>
            <h3>Categorias</h3>
            {item && item.map((data)=>(<CategoriasList key={data.id} items={data} />))}
        </div>
    )
}
