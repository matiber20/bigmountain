import React, {useState , useContext} from 'react'
import CartItems from '../CartItems/CartItems'
import {AppContext} from '../../context/AppContext'


export default function CartList({data}) {

    const {total,setTotal} = useContext(AppContext)

    const [dataQuantity, setDataQuantity] = useState(Math.floor(data.item.quantity))
    
    const multiplo = data.item.price * data.item.quantity

    const [partialTotal,setPartialTotal] = useState(total)

    function sumaParcial(a,b){
        const suma = a*b
        setPartialTotal(suma)
    }

    function increment(){
        if(dataQuantity<data.item.stock){
        setDataQuantity(dataQuantity+1)
        sumaParcial(dataQuantity+1,data.item.price)
        }
        
     }

    function decrement(){
        if(dataQuantity>0){
            setDataQuantity(dataQuantity-1)
            sumaParcial(dataQuantity-1,data.item.price)
        }
    }

    function handleClick(){
        setTotal(total)
    }

    return (
        <ul>
            <CartItems partialTotal={partialTotal} dataQuantity={dataQuantity} parcial={multiplo} incremento={increment} decremento={decrement} handleClick={handleClick} data={data} />
        </ul>   
    )
}
