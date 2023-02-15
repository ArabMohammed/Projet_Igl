import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer(){
    return(
        <div className="footer-footer">
            <div className="up-div-footer">
                <div className="up-div-left-footer">
                    <span>DzEstates</span>
                    <br />
                    <span>إعلانات الجزائر</span>
                </div>
                <div className="up-div-center-footer">
                    <div className="socio-div-footer">
                        <Link><img src="/images/facebook.svg" alt="facebook" /></Link>
                        <Link><img src="/images/twitter.svg" alt="twitter" /></Link>
                        <Link><img src="/images/instagram.svg" alt="instagram" /></Link>
                        <Link><img src="/images/linkedIn.svg" alt="linkedIn" /></Link>
                    </div>
                    <div>
                       <Link className="go-help-footer"><span>Qui sommes-nous?</span></Link>
                    </div>
                </div>
                <div  className="up-div-right-footer">
                    <span>Nous contacter</span>
                    <br />
                    <span>DzEstates@gmail.com</span>
                </div>
            </div>
            <div className="bottom-div-footer">
                <span>DzEstates.com 2022 | Tous droits réservés </span>
            </div>
        </div>
    )
}

export default Footer;