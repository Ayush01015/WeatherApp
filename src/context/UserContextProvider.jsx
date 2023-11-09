import { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [islogin,setIsLogin] = useState(null);
    return(
        <UserContext.Provider value={{
            user,setUser,islogin,setIsLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

