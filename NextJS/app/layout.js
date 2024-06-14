// import {Popins, Aboreto, Poppins} from 'next/font/google';
import "../styles/globals.css";
import { getMenu } from 'utils/getMenu';
import { MainMenu } from 'components/MainMenu';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


// const poppins = Poppins ({
//     subsets: ["latin"],
//     weight: ["400", "700"],
//     display: "swap",
//     variable: "--font-poppins"
// });

// const aboreto = Aboreto ({
//     subsets: ["latin"],
//     weight: ["400"],
//     display: "swap",
//     variable: "--font-aboreto"
// });

export default async function RootLayout({children}){
    const data = await getMenu("MainMenu","","");
    const data1 = await getMenu("FooterMenu1","FooterMenu1", "1"); // footer 1 menu
    const data2 = await getMenu("FooterMenu2","FooterMenu2", "2"); // footer 2 menu
    const data3 = await getMenu("FooterMenu3","FooterMenu3", "3"); // footer 3 menu
    // console.log(data);
    //here is pages menu navigation loaded
    return (
        <html lang="en" >
    <body>
    <div className="wrapper">
        <MainMenu 
        callToActionDestination={data.callToActionDestination}
         callToActionLabel={data.callToActionLabel}
          items={data.mainMenuItems} />

<MainMenu 
        callToActionDestination={data1.callToActionDestination}
         callToActionLabel={data1.callToActionLabel}
          items={data1.mainMenuItems} />


<MainMenu 
  callToActionDestination={data2.callToActionDestination}
  callToActionLabel={data2.callToActionLabel}
          items={data2.mainMenuItems} />


<MainMenu 
        callToActionDestination={data3.callToActionDestination}
         callToActionLabel={data3.callToActionLabel}
          items={data3.mainMenuItems} /> 

          {/* TODO Add menu positions to the footer */}
                <header>
            <div className="header-crop"><img className="header-pano" src="./img/pano-nch1.jpg" alt="" /></div>
        </header>

        {children}
        </div>
    </body>
    </html>);
}