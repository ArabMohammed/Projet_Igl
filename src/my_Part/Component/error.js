import React from "react" ;
import { Link } from "react-router-dom";
import './error.css' ;

function Error(){
    return(
        <>
            <div className="error-page-container">
                <div className="title-container">
                    <p>PARDON !</p>
                </div>
                <div className="paragraph-container">
                    <p>La page que vous avez cherché est introuvable</p>
                </div>
                <div className="link-container">
                    <Link to='/about'><p className="link-section">Retournez à la page d'accueil</p></Link>
                </div>
            </div>
        </>
    );
}
export default Error ;