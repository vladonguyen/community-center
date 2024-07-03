import Link from "next/link"
import "./header.css"
import Image from "next/image"

export const Header = ()=>{

    return(
        <header>
        <div className="headerwrap">
       <Link href="/"> <div className="logo-in-banner"><Image className="logo-img-in-banner" src="/img/logo-aleko-konstantinov-chitalishte.png" alt="Лого на НЧ Алеко Константинов 1954 Пловдив" width={148} height={158}/></div></Link>
        <div className="header-crop"><Image className="header-pano" src="/img/pano-nch1.jpg" alt="Мозайка на НЧ Алеко Константинов 1954 Пловдив"  width={1100} height={300}/></div>
        </div>
        
    </header>
    )
}