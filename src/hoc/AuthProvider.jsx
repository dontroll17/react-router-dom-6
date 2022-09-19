import { createContext, useState } from 'react'

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);

    const signin = (newUser, cb) => {
        setUser(newUser);
        cb();
    }

    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const val = {user, signin, signout};

    return (
        <AuthContext.Provider value={val}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider