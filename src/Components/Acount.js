import React from "react";
import "./Acount.css"
import { Link } from "react-router-dom";
import AdCard from "./AdCard";
import { LOGIN_FAIL } from "../actions/types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

function Acount({user}){
     const [ads, setAds] = useState([]);
    let obj = {}
    
    
    let j = 0;
    const navigate = useNavigate();
    
   
      const getUserAnnonces = ()=> async dispatch =>{
        console.log("welcome in annonces")
        if(localStorage.getItem('access')){
          console.log("user have an access")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          try{
              console.log("welcome in annonces1") 
              const res = await axios.get(`http://127.0.0.1:8000/api/annonces/mesannonces/`,config);
              console.log(res.data);
              setAds(res.data);
              console.log(res);
          }catch (err){
              console.log("getting annonces of user fail ")
          }
        }else{
          dispatch({
            type:LOGIN_FAIL
        })
        }
      };


    useEffect(() => getUserAnnonces(),
        []);



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
                        <Link to="/compte/mes_messages" className="link2"><p><i class="fa-solid fa-message"></i> Consulter mes dicussions</p></Link>
                    </div>
                </div>
                <div className="bottom-my-account">
                    <div className="ads-div-my-account">
                        <h2><sapn>Mes</sapn> annonces</h2>
                        <div className="list-ads-my-account">
                        {
                               ads.map((item) => {
                                j++;
                                if(j>6) return;
                                console.log("item.pk = " + item.pk)
                                let source =  `/compte/mesannonces/annonce/${item.pk}`
                                
                                return(
                                    <Link to={source} state={{ads}}>
                                            <AdCard 
                                             key={item.pk}
                                             title={item.titre}
                                             price={item.prix}
                                             unite_prix={item.unite_prix}
                                             surface={item.surface}
                                             adress={item.adresse_bien_immobilier}
                                             date={item.date_publication}
                                             isNegotiable={false}
                                             src={item.pk}
                                             utilisateurNom={user.nom}
                                             utilisateurPrenom={user.prenom}
                                             isDeleted={false}
                                        />
                                     </Link>
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

const mapState = state => ({
    user: state.auth.user
  })

export default connect(mapState) (Acount)


