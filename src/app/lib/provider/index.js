import InstalledAppProvider from "@/context/InstallContext";

const Providers = ({children}) => {
    return (
        <InstalledAppProvider>
            {children}
        </InstalledAppProvider>
    );
};

export default Providers;