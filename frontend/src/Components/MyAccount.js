import React from "react";
import "./MyAccount.css"
import { Link } from "react-router-dom";
import { AdsList } from "./AdsList";
import AdCard from "./AdCard";
import { useNavigate } from "react-router-dom";

function MyAccount(){
    let i = 0, j = 0;
    const navigate = useNavigate();
    function clickHandler(e, item){
        navigate(
            '/compte/mesannonces/annonce',
            item
        )
    }
    return(
        <>
            <div className="container-my-account">
                <div className="top-my-account">
                    <div className="top-title-my-account">
                        <h1>Mon Compte</h1>
                        <h2>Mon profil</h2>
                    </div>
                </div>
                <div className="center-my-account">
                    <div className="photo-my-account">
                        <img src="/images/user-solid.svg" alt="perso-image" />
                        <p>Bienvenue dans votre espace utilisateur</p>
                    </div>
                    <div className="switch-my-account">
                        <Link to="/compte/infopersonnelles" className="link1"><p><i class="fa-sharp fa-solid fa-gear"></i> Modifier mes informations personnelles</p></Link>
                        <Link to="" className="link2"><p><i class="fa-solid fa-message"></i> Consulter mes dicussions</p></Link>
                    </div>
                </div>
                <div className="bottom-my-account">
                    <div className="fav-div-my-account">
                        <h2><span>Mes</span> favoris</h2>
                        <div className="list-fav-my-account">
                            {
                               AdsList.map((item) => {
                                i++;
                                if(i>4) return;
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
                        <Link to="/compte/mesfavoris"><button className="see-all-fav">Voir tous</button></Link>
                    </div>
                    <div className="ads-div-my-account">
                        <h2><sapn>Mes</sapn> annonces</h2>
                        <div className="list-ads-my-account">
                        {
                               AdsList.map((item) => {
                                j++;
                                if(j>4) return;
                                return(
                                    <div onClick={() => clickHandler(item)}>
                                        <AdCard title={item.title}
                                        price={item.price}
                                        surface={item.surface}
                                        adress={item.adress}
                                        owner={item.owner}
                                        date={item.date}
                                        isNegotiable={item.isNegotiable}
                                        />
                                     </div>
                                )
                               })
                            }
                        </div>
                        <Link to="/compte/mesannonces"><button className="see-all-ads">Voir tous</button></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MyAccount;