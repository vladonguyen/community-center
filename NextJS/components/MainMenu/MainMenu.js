"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationResponsive } from 'components/NavigationResponsive';
import { FaCaretDown } from 'react-icons/fa';
import './mainmenu.css';



export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
    console.log("MAIN MENU: ", items);

  const pathname = usePathname();
  

    return (

        
        <nav className="topnav" id="myTopnav">
              <div>
                {(items || []).map((item) => (
                   
                    <div
                        key={item.id}
                    >
                     
                     {!item.subMenuItems?.length && (<div>
                            <Link  href={item.destination}
                            className={`link ${pathname === item.destination ? 'active' : ''}`}>
                                    {item.label}
                            </Link>
                        </div>)}
                        <div className="dropdown">
                        {!!item.subMenuItems?.length && (<div>
                         
                                   
                                   
                                    <Link  href={item.destination}> {item.label} <FaCaretDown className='fa' /></Link>  
            
 
                          

                            
                        </div>
                    
                    
                    
                    
                    )}
                          
                       
                     
                        {!!item.subMenuItems?.length && (
                           <div className="dropdown-content">
                                {item.subMenuItems.map((subMenuItem) => (
                                    <Link  key={subMenuItem.id} href={subMenuItem.destination} >
                                            {subMenuItem.label} 
                                    </Link>
                                ))}
                            </div>
                        )}
                         </div>
                    </div>
                ))}




            </div>
           <NavigationResponsive />

    
      </nav>
   
    );
};
