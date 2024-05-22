import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import { FaHouseUser, FaHeart } from 'react-icons/fa';

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
    console.log("MAIN MENU: ", items);
    return (
        <div className="bg-slate-800 text-white  sticky top-0 z-20 flex">
            <div className="py-4 pl-5 flex text-pink-600">
             
            </div>
            <div className='flex flex-1 justify-end'>
                {(items || []).map((item) => (
                    <div
                        key={item.id}
                        className='hover:bg-slate-700 cursor-pointer relative group'
                    >
                        <div>
                            <Link  href={item.destination} className='p-5 block'>
                                    {item.label}
                            </Link>
                        </div>
                        {!!item.subMenuItems?.length && (
                            <div
                                className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'
                            >
                                {item.subMenuItems.map((subMenuItem) => (
                                    <Link  key={subMenuItem.id} href={subMenuItem.destination} className='block whitespace-nowrap p-5 hover:bg-slate-700'>
                                            {subMenuItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}




            </div>
        </div>
    );
};
