"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { InstallAppContext } from '@/context/InstallContext';
import { FaArrowDown, FaStar } from "react-icons/fa";
import { toast } from 'react-toastify'; 

const InstallAppsCard = ({ app, handleUninstall }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full border border-gray-100 bg-white rounded-2xl p-5 my-4 shadow-sm items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative h-24 w-24 bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                        className="object-contain p-2"
                        src={app?.image || ""}
                        alt={app?.title || "app"}
                        fill
                    />
                </div>
                <div className="text-center md:text-start">
                    <h2 className="text-2xl font-semibold">{app?.title}</h2>
                    <div className="flex items-center justify-center md:justify-start gap-6 p-2">
                        <p className="text-green-500 text-lg items-center flex gap-1 font-medium">
                            <FaArrowDown /> {app?.downloads}
                        </p>
                        <p className="text-orange-500 text-lg items-center flex gap-1 font-medium">
                            <FaStar /> {app?.ratingAvg}
                        </p>
                        <p className="text-gray-500">{app?.size}MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className="btn btn-error text-white px-8"
                    onClick={() => handleUninstall(app)}
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};


const InstalledApps = () => {
    const context = useContext(InstallAppContext);

    if (!context) {
        return <div className="text-center py-20">Context loading error...</div>;
    }

    const { installApp, setInstallApp } = context;

    
    const handleUninstall = (app) => {
        const appId = app.id || app._id;
        const restApps = installApp.filter(item => (item.id || item._id) !== appId);
        setInstallApp(restApps);

        
        toast.error(`${app.title} Uninstalled Successfully!`, {
            icon: "🗑️"
        });
    };

    return (
        <div className='bg-gray-50 py-10 min-h-screen'>
            <div className='text-center py-10 w-11/12 md:w-10/12 mx-auto'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>Your Installed Apps</h1>
                    <p className='text-gray-400 my-5'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>
                    <p className='text-xl font-semibold text-start'>
                        {installApp?.length || 0} Apps Found
                    </p>
                </div>
            </div>

            <div className='w-11/12 md:w-10/12 mx-auto'>
                {(!installApp || installApp.length === 0) ? (
                    <h1 className='text-3xl md:text-5xl font-bold text-center my-20 text-red-500 border border-red-100 p-10 rounded-2xl bg-white'>
                        No Installed Apps Found
                    </h1>
                ) : (
                    installApp.map(app => (
                        <InstallAppsCard
                            key={app.id || app._id}
                            handleUninstall={handleUninstall}
                            app={app}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default InstalledApps;