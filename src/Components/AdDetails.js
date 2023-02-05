import React, { useState } from "react";
import { useLocation } from "react-router";
import './AdDetails.css'
import { dispatch } from "react";
import axios from 'axios';
import { LOGIN_FAIL } from "../actions/types";
import { useEffect } from "react";

function AdDetails(props){
    const nb=Number(props.src)
    console.log("nb ================ " + nb)
    const src1 =  `http://127.0.0.1:8000/api/annonces/${nb}/images/1/`
    console.log("=============================>"+src1)
    /*const src2 =  `http://127.0.0.1:8000/api/annonces/${props.src}/images/2`
    const src3 =  `http://127.0.0.1:8000/api/annonces/${props.src}/images/3`
    const src4 =  `http://127.0.0.1:8000/api/annonces/${props.src}/images/4`*/

    const [contacts, setContacts] = useState([])
    const getContactId=()=>async dispatch =>{
        if(localStorage.getItem('access')){
          console.log("user have an access to research annonce")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          const id_contact=props.contact
          try{
            console.log("id contact : "+props.contact)
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
      //              const res = await axios.get(`http://127.0.0.1:8000/api/contacts/${id_contact}/`,config);

    useEffect(() => getContactId(),
        []);


    return(
        <>
            <div className="box-container-ad-details">
                <h2>{props.titre}</h2>
                <p className="span">Prix: {props.unite_prix} {props.prix}</p>
                <p className="span2"><i class="fa-sharp fa-solid fa-location-dot"></i> {props.adresse_bien_immobilier}</p>

                <div className="images-ad-details">
                    <img src={src1} alt='image-immobilier' />
                    <img src='/images/video-immobilier.jpg' alt='image-immobilier' />
                    <img src='/images/video-immobilier.jpg' alt='image-trois' />
                    <img src='/images/video-immobilier.jpg' alt='image-quatre' />
                </div>
                <div className="bottom-ad-details">
                    <div className="left-div-ad-details">
                        <div className="description-ad-details">
                            <h3>Description</h3>
                            <hr />
                            <p>{props.description}</p>
                        </div>
                        <div className="bref-resume-ad-details">
                            <h3>Résumé</h3>
                            <hr />
                            <p>Catégorie: {props.categorie}</p> <br />
                            <p>Type du bien:{props.type} </p> <br />
                            <p>Nombre de pièces: </p> <br />
                            <p>Surface: {props.surface}</p> <br />
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
                                    <p><i class="fa fa-person"></i>  {props.nom} {props.prenom}</p>
                                    <p><i class="fa fa-phone"></i>  {contacts.numero_telephone}</p>
                                    <p><i class="fa-sharp fa-solid fa-location-dot"></i>  {props.adresse_bien_immobilier}</p>
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

export default AdDetails;