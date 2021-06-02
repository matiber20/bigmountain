import {createContext , useState} from 'react'

export const AppContext = createContext([])

export default function AppContextProvider({children}) {

    const [user,setUser] = useState("Matias")
    const [item,setItem] = useState([])
    const [inCart,setInCart] = useState([])
    const [cart,setCart] = useState(false)
    const [quantity,setQuantity] = useState(0)
    const [total,setTotal] = useState(0)
    const [stock,setStock] = useState(0)
    const [pagarCarrito,setPagarCarrito] = useState(0)

    //PONER STOCK EN CONTEXT PARA PODER MANTENER ACTUALIZADO EL VALOR
    
    function onAdd(e){
        setCart(true)
        setInCart(...inCart,e.target.attributes.name.value)
        setQuantity(e.target.attributes.quantity.value)
    }


    return (
        <div>
        <AppContext.Provider value={
                { user,
                setUser,
                item,
                setItem,
                cart,
                setCart,
                setInCart,
                inCart,
                onAdd,
                quantity,
                setTotal,
                total,
                stock,
                setStock,
                pagarCarrito,
                setPagarCarrito
                }
                  }>
                      {children}
        </AppContext.Provider>
        </div>
    )
}
