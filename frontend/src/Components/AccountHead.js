import React from "react";
import './AccountHead.css';
import { Link } from "react-router-dom";

function AccountHead(props){

    var d = new Date();
    var hour = d.getHours();
    var salutation="Salut";
    
    if(hour < 18) {
        salutation = "Bonjour"
    } else {
        salutation = "Bonsoir"
    }
    
    

    return( 
        <div className="container-ah">
            <div className="profil-ah">
                <Link to="/account"><img src='/images/user-solid.svg' alt="user-profil"></img></Link>
            </div>
            <div className="salutaion-ah">
                <h2>{props.page}</h2>
                <p>{salutation + " " + props.name}</p>
            </div>
            <div className="options-ah">
                <Link className="option-ah" to="/MesFavoris"><img src='/images/heart-solid.svg' alt="favoris"></img></Link>
                <Link className="option-ah" to="/account/mesannonces"><img src="/images/bullhorn-solid.svg" alt="ads"></img></Link>
                <Link className="option-ah" to=""><img src='/images/message-solid.svg' alt="messages"></img></Link>
                <Link className="option-ah" to=""><img src="/images/right-from-bracket-solid.svg" alt="log out"></img></Link>
            </div>
        </div>
    )
}

export default AccountHead;