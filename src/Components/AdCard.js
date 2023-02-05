import React from "react";
import './AdCard.css';
import { Link } from "react-router-dom";
import {AdsList} from "./AdsList";
import { connect } from "react-redux";

function AdCard(props){
    const source = `http://127.0.0.1:8000/api/annonces/${props.src}/images/1`;
    return(
        <>
        <div className="box-ad">
            <div className="image-ac">
                <img src={source} alt="immage-immobilier" />
                <button className="nego-ac">Supprimer</button>
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
                <p><i class="fa-regular fa-user"></i>{props.utilisateurNom} {props.utilisateurPrenom}</p>
                <p><i class="fa-sharp fa-solid fa-calendar-week"></i>{props.date}</p>
            </div>
        </div>
        </>
    )
}

export default AdCard;