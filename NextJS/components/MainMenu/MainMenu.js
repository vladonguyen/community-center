"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationResponsive } from 'components/NavigationResponsive';
import { FaCaretDown } from 'react-icons/fa';
import './mainmenu.css';

// TODO responsive menu
export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
    const pathname = usePathname();

    // console.log("Current pathname: ", pathname);

    const normalizePath = (path) => {
        if (!path) return "/";
        return path.replace(/\/$/, '');
    };

    return (
        <nav className="topnav" id="myTopnav">
            <div>
                {(items || []).map((item) => {
                    const isActive = normalizePath(pathname) === normalizePath(item.destination);
                    // console.log(`Checking path: ${normalizePath(pathname)} against item: ${normalizePath(item.destination)} - Active: ${isActive}`);
                    
                    return (
                        <div key={item.id}>
                            {!item.subMenuItems?.length && (
                                <div>
                                    <Link
                                        className={isActive ? 'active' : ''}
                                        href={item.destination}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            )}
                            <div className="dropdown">
                                {!!item.subMenuItems?.length && (
                                    <div>
                                        <Link
                                            className={isActive ? 'active' : ''}
                                            href={item.destination}
                                        >
                                            {item.label} <FaCaretDown className='fa' />
                                        </Link>
                                    </div>
                                )}
                                {!!item.subMenuItems?.length && (
                                    <div className="dropdown-content">
                                        {item.subMenuItems.map((subMenuItem) => {
                                            const isSubActive = normalizePath(pathname) === normalizePath(subMenuItem.destination);
                                            // console.log(`Checking path: ${normalizePath(pathname)} against sub-item: ${normalizePath(subMenuItem.destination)} - Active: ${isSubActive}`);
                                            
                                            return (
                                                <Link
                                                    key={subMenuItem.id}
                                                    className={isSubActive ? 'active' : ''}
                                                    href={subMenuItem.destination}
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
            </div>
            <NavigationResponsive />
        </nav>
    );
};
