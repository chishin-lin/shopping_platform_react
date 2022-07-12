import { createContext, useState, useEffect } from "react";

import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase/Firebase";

//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null, //null的狀態為無，若是空物件會為真
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser]=useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}