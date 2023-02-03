import React, { useEffect } from "react";
import './Myads.css';
import './AccountHead'
import { useState } from "react";
import { Link } from "react-router-dom";
import { AdsList } from "./AdsList";
import AdCard from "./AdCard";
import{ getAnnonceDetail, createAnnonce} from '../actions/annonces';
import { dispatch } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {
    LOGIN_FAIL,
  }from '../actions/types'
import { useNavigate } from "react-router-dom";

function Myads({user}){

    const [ads, setAds] = useState([]);

    let obj = {}

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


    

    return (
        <>

        <div className="container-my-ads">
            <div className="top-my-ads">
                <div className="top-title-my-ads">
                    <h1>Mon Compte</h1>
                    <h2>Mon profil  Mes annonces</h2>
                </div>
            </div>
            
            <div className="ads-div-my-ads">
                    <h2><sapn>Mes</sapn> annonces</h2>
                    <div className="list-ads-my-ads">
                    {
                               ads.map((item) => {
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
            </div>
        </div>
    </>
    )

}

const mapState = state => ({
    user: state.auth.user
})

export default connect(mapState,) (Myads);