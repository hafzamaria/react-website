// import { createContext, useContext } from "react";
import React, { useContext } from "react";



// create a context(wareHouse)
// Provider
// consumer /useContext (hook)
 const AppContext = React.createContext();
 const AppProvider =({children})=>{
    return(
        <AppContext.Provider value='Hafza Maria'>{children}</AppContext.Provider>///value is firstName
    )

 };
 ///global custom hook
 const useGlobalContext = () => {
return  useContext(AppContext);
 }

 export {AppContext,AppProvider ,useGlobalContext}