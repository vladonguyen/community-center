"use client";

import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import './mainmenu.css';

// TODO responsive menu
export const FooterMenu = ({ items }) => {

    return (

        <div>
            {(items || []).map((item) => {
             

                return (
                    <div key={item.id} className='footerMenuFirstLevel'>
                        {!item.subMenuItems?.length && (
                            <div className='boldTitle'>
                                <Link 
                                   
                                    href={item.destination}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        )}
                        <div className="dropdownFooter">
                            {!!item.subMenuItems?.length && (
                                <div className='boldTitle'>
                                    <Link
                                       
                                        href={item.destination}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            )}
                            {!!item.subMenuItems?.length && (
                                <div className="dropdown-content-footer">
                                    {item.subMenuItems.map((subMenuItem) => {
                                       
                                        return (
                                            <div>
                                            <Link
                                                key={subMenuItem.id}
                                               
                                                href={subMenuItem.destination}
                                            >
                                                {subMenuItem.label}
                                            </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>


    );
};
