import {createContext , useState} from 'react'

export const AppContext = createContext([])

export default function AppContextProvider({children}) {

    const [user,setUser] = useState("Matias")
    const [item,setItem] = useState([])
    const [inCart,setInCart] = useState([])
    const [cart,setCart] = useState(false)
    const [quantity,setQuantity] = useState(0)
    const [total,setTotal] = useState(0)
    
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
                    total    }
                  }>
                      {children}
        </AppContext.Provider>
        </div>
    )
}
