import Image from "next/image"

export const Address = ({position})=>{
    return (
        <div className={position}>
        <p>
          <span className="boldTitle">Адрес: </span>
          <br />
          бул. „6-ти Септември“ 160, Пловдив
          <br />
          <br />
          <span className="boldTitle">Работно време:</span>
          <br />
          Понеделник - петък 9:00 - 18:00
          <br />
          <br />
          <br />
          
      
                    <a href="https://www.facebook.com/chitalishte.alekokonstantinov" target="_blank" rel="noopener noreferrer">
                    <Image className="footer-fb-icon" src='./img/fb.svg' alt="Facebook icon" width={26} height={26} />   facebook.com/Alekoplovdiv 
                        </a>
                    
                   
        </p>
      </div>
    )
}