import React from "react";
import "./MyAccount.css"
import { Link } from "react-router-dom";
import { AdsList } from "./AdsList";
import AdCard from "./AdCard";
import { LOGIN_FAIL } from "../actions/types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function MyAccount(){
    const [ads, setAds] = useState([]);
    let obj = {}

    let i = 0, j = 0;
    const navigate = useNavigate();
    function clickHandler(item){
        console.log("state dans use navigate : ", item);
        navigate(
            '/compte/mesannonces/annonce',
            {
                state:
                    { 
                        titre: item.titre,
                        prix: item.prix,
                        surface: item.surface,
                        adress: item.adresse_bien_immobilier,
                        date : item.date_publication,
                        src: item.pk,
                        description: item.description,
                        categorie: item.categorie_immobilier,
                        type: item.type_immobilier,
                        unite: item.unite_prix,
                        wilaya: item.wilaya,
                        commune: item.commune,
                    }
            }
        )
    }

   
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
                        <Link to="" className="link2"><p><i class="fa-solid fa-message"></i> Consulter mes dicussions</p></Link>
                    </div>
                </div>
                <div className="bottom-my-account">
                    <div className="ads-div-my-account">
                        <h2><sapn>Mes</sapn> annonces</h2>
                        <div className="list-ads-my-account">
                        {
                               ads.map((item) => {
                                j++;
                                if(j>4) return;
                                obj = {
                                    titre: item.titre,
                                    prix: item.prix,
                                    surface: item.surface,
                                    adress: item.adresse_bien_immobilier,
                                    date : item.date_publication,
                                    src: item.pk,
                                    description: item.description,
                                    categorie: item.categorie_immobilier,
                                    type: item.type_immobilier,
                                    unite: item.unite_prix,
                                    wilaya: item.wilaya,
                                    commune: item.commune,
                                    unite: item.unite_prix,

                                }
                                
                                return(
                                    <div onClick={() => clickHandler(obj)}>
                                        {console.log("Les info avant passage : " + obj.titre )}
                                        <AdCard 
                                        key={item.pk}
                                        title={item.titre}
                                        price={item.prix}
                                        surface={item.surface}
                                        adress={item.adresse_bien_immobilier}
                                        date={item.date_publication}
                                        isNegotiable={false}
                                        src={item.pk}
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