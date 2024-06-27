import Link from "next/link"
import "./header.css"

export const Header = ()=>{

    return(
        <header>
        <div className="headerwrap">
       <Link href="/"> <div className="logo-in-banner"><img className="logo-img-in-banner" src="./img/logo-aleko-konstantinov-chitalishte.png" alt="" /></div></Link>
        <div className="header-crop"><img className="header-pano" src="./img/pano-nch1.jpg" alt="" /></div>
        </div>
        
    </header>
    )
}