import React from "react";
import TopPart from "./topPart" ;
import IdentityImg from "../images/identity.jpg"
import './admin.css'
import persIcon from "../images/persIcon.png" ;
import MsgIcon from "../images/AdsIcon.png" ;

function AdminSection(props) {
    function getData(Val){

    }
    return(
        <>
            <TopPart title = 'Compte Administrateur'/>
            <div className="Admin-section-container">
                <div className="sidebar-container">
                    <div className="section-profil">
                    <img className="img-identity" src={IdentityImg} alt=""></img>
                    <h5>Bienvenue {props.name}</h5>
                    </div>
                    <ul className="list-sidebar">
                        <li>Tableau de bord</li>
                        <li>Messages</li>
                        <li>Annonces</li>
                    </ul>
                </div>
                <div className="info-admin-container">
                    <div className="stat-container">
                        <ul className="stat-list">
                            <li>
                                <img src={persIcon} alt=""></img>
                                <h5>{props.nbUser} Utilisateurs</h5>
                            </li>
                            <li>
                                <img src={MsgIcon} alt=""></img>
                                <h5>{props.nbAds} Annonces</h5>
                            </li>
                            <li>
                                <img src={MsgIcon} alt=""></img>
                                <h5>{props.nbMsg} Messages</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="recent-Users-admin">
                        <h3>Utilisateurs Récents</h3>
                        
                    </div>
                    <div className="recent-Ads-list">
                        <h3>Annonces Récents</h3>
                    </div>
                    <div className="btn-admin-container">
                        <form >
                        <input placeholder="Veuillez entrer le nom du site a scraper" type="text" onChange={getData}></input>
                        <button className="btn-web-scraping" >Récupérer les Annonces du site</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminSection ;