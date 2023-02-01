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
import { Connect } from "react-redux";
import {
    LOGIN_FAIL,
  }from '../actions/types'


function Myads({user}){

    const [ads, setAds] = useState([]);

    

    const getAnnonceDetail=()=>async dispatch =>{
        console.log('hello');
        if(localStorage.getItem('access')){
          console.log("user have an access to research annonce")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          const id_annonce=1
          try{
              const res = await axios.get(`http://127.0.0.1:8000/api/annonces/${id_annonce}/`,config);
              console.log(res.data);
              setAds(res.data);
              console.log('ads est : '+ads);
          }catch (err){
              console.log("create a new contact fail ")
          }
        }else{
          dispatch({
            type:LOGIN_FAIL
        })
        }
      };

      const getUserAnnonces = ()=> async dispatch =>{
        console.log("welcome in getcontact")
        if(localStorage.getItem('access')){
          console.log("user have an access")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          try{
              const res = await axios.get(`http://127.0.0.1:8000/api/annonces/mesannonces/`,config);
              console.log(res.data)
          }catch (err){
              console.log("getting contacts of user fail ")
          }
        }else{
          dispatch({
            type:LOGIN_FAIL
        })
        }
      };


    useEffect(() => getAnnonceDetail(),
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
                           /*ads.forEach((item) => {
                            return(
                                <AdCard title={item.titre}
                                 price={item.prix}
                                 surface={item.surface}
                                 adress={item.adresse_bien_immobilier}
                                 date={item.date_publication}
                                 isNegotiable={false}
                                 />
                            )
                           })*/
                           
                                <AdCard title={ads.titre}
                                 price={ads.prix + ads.unite_prix}
                                 surface={ads.surface}
                                 adress={ads.adresse_bien_immobilier}
                                 date={ads.date_publication}
                                 isNegotiable={false}
                                 />
                          
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