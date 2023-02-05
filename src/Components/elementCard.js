import React from "react";
import { Link } from "react-router-dom";
import './elementCard.css' ;

/*<Link to={props.lien} >
        
        </Link>*/

function ElementCard(props){
    return(
        <>
                <div className="card-help-container">
                    <div className="image-qst-container">
                        <img src={props.src} alt="" />
                    </div>
                    <div className="blocks-item">
                        <Link to={props.lien}>
                        <h5>{props.title}</h5>
                        </Link>
                    </div>
                    <div className="bloc-item-description">
                        <p>{props.description}</p>
                    </div>
                </div>
            
        </>
    ) 
}

// export default ElementCard;
module.exports=ElementCard;
