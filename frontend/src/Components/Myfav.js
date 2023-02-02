import React from "react";
import './Myfav.css';
import './AccountHead'
import { Link } from "react-router-dom";
import { AdsList } from "./AdsList";
import AdCard from "./AdCard";

function Myfav(){
    
    return (
        <>
        <div className="container-my-fav">
            <div className="top-my-fav">
                <div className="top-title-my-fav">
                    <h1>Mon Compte</h1>
                    <h2>Mon profil  Mes annonces</h2>
                </div>
            </div>
            
            <div className="ads-div-my-fav">
                    <h2><sapn>Mes</sapn> annonces</h2>
                    <div className="list-ads-my-fav">
                    {
                           AdsList.map((item) => {
                            return(
                                <AdCard title={item.title}
                                 price={item.price}
                                 surface={item.surface}
                                 adress={item.adress}
                                 owner={item.owner}
                                 date={item.date}
                                 isNegotiable={item.isNegotiable}
                                 />
                            )
                           })
                        }
                    </div>
            </div>
        </div>
    </>
    )
}

export default Myfav;