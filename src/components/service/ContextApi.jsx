import { createContext, useState } from "react";

export const UserContext=createContext();
 const ContextProvider=({children})=>{
    const [sideBar,setSideBar]=useState(false);
    const[ser,setServices]=useState(false);
    const[abt,setAbout]=useState(false);
    return <UserContext.Provider value={{sideBar,setSideBar,ser,setServices,abt,setAbout}}>
         {children}
    </UserContext.Provider>
}
export default ContextProvider;