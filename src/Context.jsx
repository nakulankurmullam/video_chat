import React, { createContext, useState } from 'react'

export const FireBaseAuthContext = createContext(null)
function Context({children}) {
    const [user,setUser]  = useState(false)
    return (
        <FireBaseAuthContext.Provider value={{user,setUser}}>
            {children}
        </FireBaseAuthContext.Provider>
    )
}

export default Context
