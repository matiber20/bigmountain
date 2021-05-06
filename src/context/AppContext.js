import {createContext , useState} from 'react'


export const Appcontext = createContext([])

export default function AppContextProvider({children}) {

    const [user,setUser] = useState(null)
    const [cart,setCart] = useState([])

    return (
        <div>
                  <Appcontext.Provider value={
                     { user,
                      setUser,
                      cart,
                      setCart}
                  }>
                      {children}
                  </Appcontext.Provider>
        </div>
    )
}
