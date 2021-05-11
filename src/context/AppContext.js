import {createContext , useState} from 'react'


export const Appcontext = createContext([])

export default function AppContextProvider({children}) {

    const [user,setUser] = useState("Matias")
    const [item,setItem] = useState([])
    const [number,setNumber] = useState(0)
    const [stock,setStock] = useState(10) 
    const [cart,setCart] = useState(0)

    return (
        <div>
                  <Appcontext.Provider value={
                    { user,
                    setUser,
                    item,
                    setItem,
                    number,
                    setNumber,
                    stock, setStock,
                    cart,setCart    }
                  }>
                      {children}
                  </Appcontext.Provider>
        </div>
    )
}
