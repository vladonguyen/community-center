import "./footer.css" 
import { Address } from "./Address";
import { Copyright } from "./Copyright";
import { FooterMenu } from "components/Footer/FooterMenu";

export const Footer = ({items1, items2, items3})=> {

    return (
        <footer>
  <div className="footer-columns-wrapper">
  <Address position="address-desktop" />
    <div className="footer-column">
<FooterMenu items={items1} />
    </div>
    <div className="footer-column">
    <FooterMenu items={items2} />
    </div>
    <div className="footer-column">
    <FooterMenu items={items3} />
    </div>
  </div>
  <Address position="address-mobile" />
  <Copyright></Copyright>
</footer>

    )
}