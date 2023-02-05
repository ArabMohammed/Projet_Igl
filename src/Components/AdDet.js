import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import './AdDetails.css'
import { dispatch } from "react";
import axios from 'axios';
import { LOGIN_FAIL } from "../actions/types";
import { useEffect } from "react";
import { connect } from "react-redux";

function AdDet({user}){

    const location = useLocation()
    console.log("location + " , location.state)

    const [ads, setAds] = useState([])

    const { annonceId } = useParams()
  
    
    const src1 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/1/`
    const src2 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/2/`
    const src3 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/3/`
    const src4 =  `http://127.0.0.1:8000/api/annonces/${annonceId}/images/4/`
    
    
        const annonce = location.state.ads.find((annonce) => {
            return annonce.pk === parseInt(annonceId)
        })
        


    const [contacts, setContacts] = useState({})

    const getContactId=()=>async dispatch =>{
        
        if(localStorage.getItem('access')){
          console.log("user have an access to research annonce")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          const id_contact=annonce.pk
          try{
              const res = await axios.get(`http://127.0.0.1:8000/api/contacts/${id_contact}/`,config);
              console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC Ad Details")
              console.log(annonce.pk)
              console.log(res.data)
              setContacts(res.data)
              console.log(contacts)
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
        []);

      

    return(
        <>
            <div className="box-container-ad-details">
                <h2>{annonce.titre}</h2>
                <p className="span">Prix: {annonce.prix} </p>
                <p className="span2"><i class="fa-sharp fa-solid fa-location-dot"></i>{annonce.adresse_bien_immobilier}</p>

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
                            <p>{annonce.description}</p>
                        </div>
                        <div className="bref-resume-ad-details">
                            <h3>Résumé</h3>
                            <hr />
                            <p>Catégorie: {annonce.categorie} </p> <br />
                            <p>Type du bien: {annonce.type} </p> <br />
                            <p>Surface: {annonce.surface}</p> <br />
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
                                    <p><i class="fa fa-phone"></i> {contacts.numero_telephone}  </p>
                                    <p><i class="fa-sharp fa-solid fa-location-dot"></i> {annonce.adresse_bien_immobilier} </p>
                                    <p><i class="fa fa-envelope"></i> {contacts.email}</p>
                                    <p><i class="fa-sharp fa-solid fa-location-dot"></i>  {contacts.commune} + {contacts.wilaya}</p>
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