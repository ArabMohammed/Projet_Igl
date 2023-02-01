import React from "react";
import { Link, Route, Routes  } from "react-router-dom";
import './Footer.css'

function Footer(){
    return(
        <div className="footer-footer">
            <div className="up-div-footer">
                <div className="up-div-left-footer">
                    <span>DzAds</span>
                    <br />
                    <span>إعلانات الجزائر</span>
                </div>
                <div className="up-div-center-footer">
                    <div className="socio-div-footer">
                        <Link to=''><img src="/images/facebook.svg" alt="facebook" /></Link>
                        <Link to=''><img src="/images/twitter.svg" alt="twitter" /></Link>
                        <Link to=''><img src="/images/instagram.svg" alt="instagram" /></Link>
                        <Link to=''><img src="/images/linkedIn.svg" alt="linkedIn" /></Link>
                    </div>
                    <div>
                       <Link to='' className="go-help-footer"><span>Qui sommes-nous?</span></Link>
                    </div>
                </div>
                <div  className="up-div-right-footer">
                    <span>Nous contacter</span>
                    <br />
                    <span>dzads@gmail.com</span>
                </div>
            </div>
            <div className="bottom-div-footer">
                <span>dzads.com 2022 | Tous droits réservés </span>
            </div>
        </div>
    )
}

export default Footer;