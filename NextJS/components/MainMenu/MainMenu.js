import Link from 'next/link';
import './mainmenu.css';
import { NavigationResponsive } from 'components/NavigationResponsive';
// import { responsiveMenu } from 'utils/responsiveMenu';



export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
    console.log("MAIN MENU: ", items);

  

    return (


        <nav className="topnav" id="myTopnav">
              <div>
                {(items || []).map((item) => (
                   
                    <div
                        key={item.id}
                    >
                     
                     {!item.subMenuItems?.length && (<div>
                            <Link  href={item.destination}>
                                    {item.label}
                            </Link>
                        </div>)}
                        <div className="dropdown">
                        {!!item.subMenuItems?.length && (<div>
                         
                                   
                                   
                                    <Link  href={item.destination}> {item.label}<i className="fa fa-caret-down" /></Link>  
            
 
                          

                            
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
