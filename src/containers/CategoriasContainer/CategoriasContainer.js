import React, {useState,useEffect,useContext} from 'react'
import CategoriasList from '../../components/CategoriasList/CategoriasList'
import { Appcontext } from '../../context/cartContext';


const { getItems } = require('../../services/services')

export default function CategoriasContainer() {
    const [item,setItem] = useState();
    // const [categorias,setCategorias] = useState({})
    const {name} = useContext(Appcontext)
    
    useEffect(()=>{
        getItems()
        .then(data=>setItem(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            {console.log(name)}
            {item && item.map((data)=>(<CategoriasList itemDireccion={data.address} items={data}  />))}
        </div>
    )
}
