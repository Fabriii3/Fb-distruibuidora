import { createContext, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user , setUser] = useState({
        email: "rosaura234a@gmail.com" ,
        token: "a3123hasd2132"
    })

    return(
        <UserContext.Provider value={{user}}>
        {children}
        </UserContext.Provider>
    )
}