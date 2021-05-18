import {createContext , useState} from 'react'

export const AppContext = createContext([])

export default function AppContextProvider({children}) {

    const [user,setUser] = useState("Matias")
    const [item,setItem] = useState([])
    const [inCart,setInCart] = useState([])
    const [cart,setCart] = useState(false)
    
    function onAdd(){
        return    setCart(true)
            // setInCart(...inCart, item)        
        // }else{
        //     setCart(false)
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
                    onAdd    }
                  }>
                      {children}
        </AppContext.Provider>
        </div>
    )
}
