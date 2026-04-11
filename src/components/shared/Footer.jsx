import React from 'react';
import Image from 'next/image'; 
import logo from "../../assets/img/logo.png"; 

const Footer = () => {
    return (
        <div className='bg-blue-950 text-white p-10'>
            <footer className="footer sm:footer-horizontal w-10/12 mx-auto">
                <aside>
                    <div className="flex gap-2 items-center">
                        {/* Next.js Image Component ব্যবহার করা হয়েছে */}
                        <Image 
                            src={logo} 
                            alt="Logo" 
                            className="h-16 w-auto" 
                            priority={false} 
                        />
                        <p className="text-2xl font-bold">HERO.IO</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;