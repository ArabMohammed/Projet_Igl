import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import './AdDetails.css'
import { dispatch } from "react";
import axios from 'axios';
import { LOGIN_FAIL } from "../actions/types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useFetcher } from "react-router-dom";

function AdDet({user}){

    const [ads, setAds] = useState([])

    const { annonceId } = useParams()
    let annonce
  
    
    const src1 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/1/`
    const src2 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/2/`
    const src3 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/3/`
    const src4 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/4/`
    
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


    useEffect(()=>{
        getUserAnnonces()
         annonce = ads.find((annonce) => {
            return annonce.pk === parseInt(annonceId)
        }
        )
    }
        , [getUserAnnonces])
        
        
        /*useEffect(async () => {
   await getData();
},[]);*/
    


    const [contacts, setContacts] = useState([])
    /*const getContactId=()=>async dispatch =>{
        console.log('useeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee = ' + adId)
        if(localStorage.getItem('access')){
          console.log("user have an access to research annonce")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          const id_contact=1
          try{
              const res = await axios.get(`http://127.0.0.1:8000/api/contacts/${id_contact}/`,config);
              console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC Ad Details" + res.data)
              setContacts(res.data)
             // con = res.data
              //console.log("les datas de l objet sont : " + con.adresse)
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
        []);*/

        /*annonce = ads.find((annonce) => {
            return annonce.pk === parseInt(annonceId)
          }
            )
        console.log("annonce = ")
        console.log(annonce)*/


    return(
        <>
            <div className="box-container-ad-details">
                <h2>{annonce.titre}</h2>
                <p className="span">Prix:  </p>
                <p className="span2"><i class="fa-sharp fa-solid fa-location-dot"></i>annonce.adresse_bien_immobilier</p>

                <div className="images-ad-details">
                    <img src={src1} alt="pas d' image 1" />
                    <img src={src2} alt="pas d'image 2" />
                    <img src={src3} alt="pas d'image 3" />
                    <img src={src4} alt="pas d'image 4" />
                </div>
                <div className="bottom-ad-details">
                    <div className="left-div-ad-details">
                        <div className="description-ad-details">
                            <h3>Description</h3>
                            <hr />
                            <p>annonce.description</p>
                        </div>
                        <div className="bref-resume-ad-details">
                            <h3>Résumé</h3>
                            <hr />
                            <p>Catégorie: annonce.categorie </p> <br />
                            <p>Type du bien: annonce.type </p> <br />
                            <p>Nombre de pièces: annonce.type </p> <br />
                            <p>Surface: annonce.surface</p> <br />
                        </div>
                    </div>

                    <div className="contact-info-ad-details">
                        <h3>Contact</h3>
                        <hr />
                        <div className="contact-info-top-ad-details">
                            <div className="contact-info-img-ad-details">
                                <img />
                                <div class='contact-info-perso-ad-deatils'>
                                    <h4>Contact Agent</h4>
                                    <p><i class="fa fa-person"></i> {user.nom} {user.prenom}</p>
                                    <p><i class="fa fa-phone"></i>   </p>
                                    <p><i class="fa-sharp fa-solid fa-location-dot"></i> annonce.adresse_bien_immobilier </p>
                                    <p><i class="fa-sharp fa-solid fa-location-dot"></i>  Instagram</p>
                                    <p><i class="fa-sharp fa-solid fa-location-dot"></i>  LinkedIn</p>
                                </div>
                            </div>
    
                        </div>
                        <h3>Se renseigner sur cet immobilier</h3>
                        <hr />
                        <form>
                            <div>
                                <textarea  
                                        id="message"
                                        placeholder="Ecrivez ton message ..."
                                        name="firstName"
                                        className="input-ad-details"
                                        />
                            </div>
                        </form>
                    </div>
                </div>
                

            </div>       
        </>
    )
}

const mapState = state => ({
    user: state.auth.user
  })

export default connect(mapState) (AdDet);