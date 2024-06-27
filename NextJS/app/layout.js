import "../styles/globals.css";
import { getMenu } from 'utils/getMenu';
import { MainMenu } from 'components/MainMenu';
import { Footer } from "components/Footer/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Header } from "components/Header/Header";

export default async function RootLayout({ children }) {
    const data = await getMenu("MainMenu", "", "");
    const data1 = await getMenu("FooterMenu1", "FooterMenu1", "1"); // footer 1 menu
    const data2 = await getMenu("FooterMenu2", "FooterMenu2", "2"); // footer 2 menu
    const data3 = await getMenu("FooterMenu3", "FooterMenu3", "3"); // footer 3 menu
    // console.log("DATAMAINMENU!!!", data.mainMenuItems[1]);
    //here is pages menu navigation loaded
    //TODO UX, responsiveness, margin, padding between text
    return (
        <html lang="en" >
            <body>
                <div className="wrapper">
                    <MainMenu
                        items={data.mainMenuItems} />

                    <Header />

                    {children}

                    <Footer
                        items1={data1.mainMenuItems}
                        items2={data2.mainMenuItems}
                        items3={data3.mainMenuItems}
                    />

                </div>

            </body>
        </html>);
}