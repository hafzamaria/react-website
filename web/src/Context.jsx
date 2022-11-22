// import { createContext, useContext } from "react";
import React, { useContext, useReducer } from "react";
import {reducer} from './Reducer';

//context to heroSection
// create a context(wareHouse)
// Provider
// consumer /useContext (hook)
 const AppContext = React.createContext();

 const initialState ={
    name:'',
    image:'',
 };



 const AppProvider =({children})=>{

    const [state, dispatch] =useReducer(reducer,initialState);
    const updateHomePage =() =>{
        return dispatch(
            {
                type:'HOME_UPDATE',
                payload:{
                    name:'Hafza Maria',
                    image:'./image/hero1.jpg'
                }
            }
        )
        
        }
        const updateAboutPage =() =>{
            return dispatch(
                {
                    type:'ABOUT_UPDATE',
                    payload:{
                        name:"Maria Momina",
                        image:'./image/about1.jpg'
                    }
                }
            )
            
            }
    return(
        <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>///value is firstName
    )

 };
 ///global custom hook
 const useGlobalContext = () => {
return  useContext(AppContext);
 }

 export {AppContext,AppProvider ,useGlobalContext}