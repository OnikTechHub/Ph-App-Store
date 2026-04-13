"use client"
import { createContext, useState } from "react";

export const InstallAppContext = createContext();
 const InstalledAppProvider = ({children}) => {
    const [installApp, setInstallApp] = useState([])

    const data = {
        installApp,
        setInstallApp,
    }
    return (
        <InstallAppContext.Provider value={data}>
            {children}
        </InstallAppContext.Provider>
    );
};

export default InstalledAppProvider;