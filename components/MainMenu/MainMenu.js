"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationResponsive } from 'components/NavigationResponsive';
import { FaCaretDown } from 'react-icons/fa';
import './mainmenu.css';
import { clickDropDownMenu } from 'utils/clickDropDownMenu';
import { useCallback } from 'react';
import Image from 'next/image';

const normalizePath = (path) => {
    if (!path) return "/";
    return path.replace(/\/$/, '');
};

const ResetTopnavClass = () => {
    try {
        const x = document.getElementById("myTopnav");
        if (x) {
            x.className = "topnav sticky-nav";
        } else {
            console.error("#myTopnav element not found");
        }
    } catch (error) {
        console.error("Error while setting class:", error);
    }
};

const MenuItem = ({ item, isActive }) => (
    <div>
        <Link
            onClick={ResetTopnavClass}
            className={isActive ? 'active' : ''}
            href={item.destination}
        >
            {item.label}
        </Link>
    </div>
);

const DropdownMenu = ({ item, isActive, pathname }) => (
    <div className="dropdown">
        <div onClick={clickDropDownMenu}>
            <button className="dropbtn">
                {item.label} <FaCaretDown className='fa' />
            </button>
        </div>
        <div className="dropdown-content">
            {item.subMenuItems.map((subMenuItem) => {
                const isSubActive = normalizePath(pathname) === normalizePath(subMenuItem.destination);
                return (
                    <Link
                        onClick={ResetTopnavClass}
                        key={subMenuItem.id}
                        className={isSubActive ? 'active' : ''}
                        href={subMenuItem.destination || subMenuItem.alternativeUrl}
                    >
                        {subMenuItem.label}
                    </Link>
                );
            })}
        </div>
    </div>
);

export const MainMenu = ({ items = [] }) => {
    const pathname = usePathname();

    return (
        <nav className="topnav sticky-nav" id="myTopnav">
            <div className="wrap-logo-hamburger-icon">
                <div className="logo-in-nav">
                    <Link href="/" className="logo-link">
                        <Image className="logo-img-in-nav" src="/img/logo-aleko-konstantinov-chitalishte.png" alt="Logo" width={77} height={83}/>
                    </Link>
                </div>
                <NavigationResponsive />
            </div>
            <div>
                {items.map((item) => {
                    const isActive = normalizePath(pathname) === normalizePath(item.destination);
                    return (
                        <div key={item.id}>
                            {!item.subMenuItems?.length ? (
                                <MenuItem item={item} isActive={isActive} />
                            ) : (
                                <DropdownMenu item={item} isActive={isActive} pathname={pathname} />
                            )}
                        </div>
                    );
                })}
                <div className='fb-logo'>
                    <a href="https://www.facebook.com/Alekoplovdiv" target="_blank" rel="noopener noreferrer">
                        <Image src='/img/fb.svg' alt="Facebook icon" width={26} height={26} />
                    </a>
                </div>
            </div>
        </nav>
    );
};
