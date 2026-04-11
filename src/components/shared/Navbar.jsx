"use client"; 

import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation"; 
import logo from "../../assets/img/logo.png";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
    const pathname = usePathname(); 

  
    const getLinkClass = (path) => {
        const isActive = pathname === path;
        return isActive 
            ? "text-lg text-purple-600 border-b border-purple-600 p-2" 
            : "text-lg";
    };

    const links = (
        <>
            <li>
                <Link href="/" className={getLinkClass("/")}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/apps" className={getLinkClass("/apps")}>
                    Apps
                </Link>
            </li>
            <li>
                <Link href="/installations" className={getLinkClass("/installations")}>
                    Installation
                </Link>
            </li>
            <li>
                <Link href="/dashboard" className={getLinkClass("/dashboard")}>
                    Dashboard
                </Link>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image className="h-16 w-auto" src={logo} alt="Logo" priority />
                        <p className="text-purple-600 text-2xl font-bold">HERO.IO</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
                </div>
                <div className="navbar-end">
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn text-white text-xl bg-purple-600 px-6 py-2 h-auto min-h-0 rounded-lg flex items-center gap-2"
                    >
                        <IoLogoGithub /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;