import React from "react";
import './AdCard.css';
import { Link } from "react-router-dom";
import {AdsList} from "./AdsList";

function AdCard(props){
    return(
        <>
        <div className="box-ad">
            <div className="image-ac">
                <img src="/images/video-immobilier.jpg" alt="immage-immobilier" />
                {props.isNegotiable && <p className="nego-ac">Négociable</p>}
                <div className="info-num-ac">
                    <p>{props.price}</p>
                    <p>{props.surface}</p>
                </div>
            </div>

            <div className="up-info-ac">
                <h1>{props.title}</h1>
                <p><i class="fa-sharp fa-solid fa-location-dot"></i> {props.adress}</p>
            </div>
            <hr />
            <div className="down-info-ac">
                <p><i class="fa-regular fa-user"></i>{props.owner}</p>
                <p><i class="fa-sharp fa-solid fa-calendar-week"></i>{props.date}</p>
            </div>
        </div>
        </>
    )
}

export default AdCard;