import {createContext , useState} from 'react'

export const AppContext = createContext([])

export default function AppContextProvider({children}) {

    const [user,setUser] = useState("Matias")
    const [item,setItem] = useState([])
    const [inCart,setInCart] = useState([])
    const [number,setNumber] = useState(0)
    const [stock,setStock] = useState(10) 
    const [cart,setCart] = useState(false)

    function increment(){
        if(stock > 0){
            setStock(stock-1)
            setNumber(number+1)
        }
    }

    function decrement(){
        if(number > 0){
            setStock(stock+1)
            setNumber(number-1)
        }
        
    }

    function onAdd(item){
        if(number !== 0){
            setCart(true)
            setInCart(...inCart, item)            
        }else{
            setCart(false)
        }
    }

    return (
        <div>
        <AppContext.Provider value={
                    { user,
                    setUser,
                    item,
                    setItem,
                    number,
                    setNumber,
                    stock,
                    setStock,
                    cart,
                    setCart,
                    increment,
                    decrement,
                    onAdd,
                    setInCart,
                    inCart    }
                  }>
                      {children}
        </AppContext.Provider>
        </div>
    )
}
