"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationResponsive } from 'components/NavigationResponsive';
import { FaCaretDown } from 'react-icons/fa';
import './mainmenu.css';
import { clickDropDownMenu } from 'utils/clickDropDownMenu';

// TODO responsive menu
export const MainMenu = ({ items }) => {
    const pathname = usePathname();

    // console.log("Current pathname: ", pathname);

    const normalizePath = (path) => {
        if (!path) return "/";
        return path.replace(/\/$/, '');
    };

    return (
        <nav className="topnav sticky-nav" id="myTopnav">
            <div className="wrap-logo-hamburger-icon">
                <div className="logo-in-nav"><img className="logo-img-in-nav" src="./img/logo-aleko-konstantinov-chitalishte.png" alt="" /></div>
                <NavigationResponsive />
            </div>


            <div>
                {(items || []).map((item) => {
                    const isActive = normalizePath(pathname) === normalizePath(item.destination);
                    // console.log(`Checking path: ${normalizePath(pathname)} against item: ${normalizePath(item.destination)} - Active: ${isActive}`);

                    return (
                        <div key={item.id}>
                            {!item.subMenuItems?.length && (
                                <div>
                                    <Link
                                     onClick={() => {
                                        try {
                                            let x = document.getElementById("myTopnav");
                                            if (x) {
                                                x.className = "topnav sticky-nav";
                                            } else {
                                                console.error("#myTopnav element not found");
                                                // Optionally handle the case where the element is not found
                                            }
                                        } catch (error) {
                                            console.error("Error while setting class:", error);
                                            // Optionally handle or log the error
                                        }
                                    }}
                                        className={isActive ? 'active' : ''}
                                        href={item.destination}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            )}
                            <div className="dropdown">
                                {!!item.subMenuItems?.length && (
                                    <div onClick={clickDropDownMenu}>
                                        <button className="dropbtn"
                                        
                                        >{item.label} <FaCaretDown className='fa' />
                                            <i className="fa fa-caret-down"></i>
                                        </button>
                                        {/* <Link
                                            className={isActive ? 'active' : ''}
                                            href="#"
                                        >
                                            {item.label} <FaCaretDown className='fa' />
                                        </Link> */}
                                    </div>
                                )}
                                {!!item.subMenuItems?.length && (
                                    <div className="dropdown-content">
                                        {item.subMenuItems.map((subMenuItem) => {
                                            const isSubActive = normalizePath(pathname) === normalizePath(subMenuItem.destination);
                                            // console.log(`Checking path: ${normalizePath(pathname)} against sub-item: ${normalizePath(subMenuItem.destination)} - Active: ${isSubActive}`);

                                            return (
                                                <Link
                                                onClick={() => {
                                                    try {
                                                        let x = document.getElementById("myTopnav");
                                                        if (x) {
                                                            x.className = "topnav sticky-nav";
                                                        } else {
                                                            console.error("#myTopnav element not found");
                                                            // Optionally handle the case where the element is not found
                                                        }
                                                    } catch (error) {
                                                        console.error("Error while setting class:", error);
                                                        // Optionally handle or log the error
                                                    }
                                                }}
                                                key={subMenuItem.id}
                                                href={subMenuItem.destination || subMenuItem.alternativeUrl}
                                            >
                                                {subMenuItem.label}
                                            </Link>
                                            
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
                
                    <div className='fb-logo'>
                        <a href="https://www.facebook.com/chitalishte.alekokonstantinov" target="_blank" rel="noopener noreferrer">
                        <img src='./img/fb.svg' alt="Facebook icon" width={26} height={26} />
                        </a>
                    </div>
               
            </div>

        </nav>
    );
};
