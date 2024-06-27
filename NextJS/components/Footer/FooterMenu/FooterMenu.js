"use client";

import Link from 'next/link';
import { v4 as uuid } from "uuid";


// TODO responsive menu
export const FooterMenu = ({ items }) => {

    return (

        <div key={uuid()}>
            {(items || []).map((item) => {
             

                return (
                    <div key={item.id} className='footerMenuFirstLevel'>
                        {!item.subMenuItems?.length && (
                            <div className='boldTitle'>
                                <Link key={uuid()}
                                   
                                    href={item.destination}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        )}
                        <div className="dropdownFooter" key={uuid()}>
                            {!!item.subMenuItems?.length && (
                                <div className='boldTitle' key={uuid()}>
                                    <Link key={uuid()}
                                       
                                        href={item.destination}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            )}
                            {!!item.subMenuItems?.length && (
                                <div className="dropdown-content-footer" key={uuid()}>
                                    {item.subMenuItems.map((subMenuItem) => {
                                       
                                        return (
                                            <div key={uuid()}>
                                            <Link 
                                                key={subMenuItem.id}
                                               
                                                href={subMenuItem.destination || subMenuItem.alternativeUrl}
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
