"use client";

import { InstallAppContext } from "@/context/InstallContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleButton = ({app}) => {
    const {installApp, setInstallApp} = useContext(InstallAppContext)
    console.log(installApp, "something");


    const handleInstallNow = () => {
        console.log("install now")
        setInstallApp([...installApp, app])
        toast.success(`${app.title} is successfully installed!`)
    }

    const isInstalled = installApp.find(
        (installApp) => installApp.id === app.id,
    );

    console.log({ isInstalled, app}, "isInstalled")
    return (
        <button
            className={`btn ${isInstalled ? "opacity-100" : "bg-indigo-600 "}  text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-indigo-100 active:scale-95`} onClick={handleInstallNow}
        >
            Install Now
        </button>
    );
};

export default InstallToggleButton;