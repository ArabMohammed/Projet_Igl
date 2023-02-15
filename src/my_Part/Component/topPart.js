import React from "react";
import handImg from '../images/hand.png' ;
import './topPart.css' ;
function TopPart(props){
      return(
        <>
        <div className="topPart-container">
            <div className="topPart-title-container">
                    <h3>{props.title}</h3>
                    <h6>Accueil {">"}{">"} {props.title}</h6>
            </div>
            <div className="img-topPart-container">
                <img src={handImg}  alt=""></img>
            </div>    
        </div>
        
        </>
      ) ;
}
export default TopPart ;