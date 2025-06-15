import React, { createContext, useState, useEffect, useContext } from 'react';



const AuthContext = createContext(); 
export function AuthProvider({ children }) {  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const savedStatus = localStorage.getItem('isLoggedIn')=== 'true';
        setIsLoggedIn(savedStatus);
    }, []);

    useEffect(() => { 
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}