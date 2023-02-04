import React, { useEffect } from "react";
import './Myads.css';
import './AccountHead'
import { useState } from "react";
import { Link } from "react-router-dom";
import { AdsList } from "./AdsList";
import AdCard from "./AdCard";
import{ getAnnonceDetail, createAnnonce} from '../actions/annonces';
import {getUserContacts} from '../actions/contacts'
import { dispatch } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {
    LOGIN_FAIL,
  }from '../actions/types'
import { useNavigate } from "react-router-dom";

function Myads({user}){
    const [contacts, setContacts] = useState([]);
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
                        utilNom: user.nom,
                        utilPrenom: user.prenom,
                        titre: item.titre,
                        prix: item.prix,
                        surface: item.surface,
                        adresse_bien_immobilier: item.adresse_bien_immobilier,
                        date : item.date_publication,
                        src: item.pk,
                        description: item.description,
                        categorie: item.categorie_immobilier,
                        type: item.type_immobilier,
                        unite: item.unite_prix,
                        wilaya: item.wilaya,
                        commune: item.commune,
                        contact: item.contact
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
              setAds(res.data);
              console.log("id de contact : "+ads)
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


    const getContactId=()=>async dispatch =>{
            if(localStorage.getItem('access')){
              console.log("user have an access to research annonce")
              const config ={
                  headers:{
                      'Content-Type':'application/json',
                      'Authorization':`JWT ${localStorage.getItem('access')}`
                  }
              };
              const id_contac=1
              try{
                  const res = await axios.get(`http://127.0.0.1:8000/api/contacts/1/`,config);
                  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
                  console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyy: "+res.data.pk);
//                  return res.data;
              }catch (err){
                  console.log("create a new contact fail ")
              }
            }else{
              dispatch({
                type:LOGIN_FAIL
            })
            }
          };
          
        useEffect(() => getContactId(),
            []);
    

    return (
        <>

        <div className="container-my-ads">
            <div className="top-my-ads">
                <div className="top-title-my-ads">
                    <h1>Mon Compte</h1>
                    <h2>Mes annonces</h2>
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
                                    adresse_bien_immobilier: item.adresse_bien_immobilier,
                                    date : item.date_publication,
                                    src: item.pk,
                                    description: item.description,
                                    categorie: item.categorie_immobilier,
                                    type: item.type_immobilier,
                                    unite: item.unite_prix,
                                    wilaya: item.wilaya,
                                    commune: item.commune,
                                    unite: item.unite_prix,
                                    contact: item.contact
                                }
                                
                                return(
                                    <div onClick={() => clickHandler(obj)}>
                                        {console.log("Les info avant passage : aaaaaaaaaaaaaaaaaaaaaaaaaaa " + item.contact )}
                                        <AdCard 
                                        key={item.pk}
                                        title={item.titre}
                                        price={item.prix}
                                        surface={item.surface}
                                        adress={item.adresse_bien_immobilier}
                                        date={item.date_publication}
                                        isNegotiable={false}
                                        src={item.pk}
                                        utilisateurNom={user.nom}
                                        utilisateurPrenom={user.prenom}
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

export default connect(mapState) (Myads);