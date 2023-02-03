import React from "react";
import { useLocation } from "react-router";
import './AdDetails.css'

function AdDetails(props){
    return(
        <>
            <div className="box-container-ad-details">
                <h2>{props.titre}</h2>
                <p className="span">Prix: {props.unite_prix} {props.prix}</p>
                <p className="span2"><i class="fa-sharp fa-solid fa-location-dot"></i> {props.adresse_bien_immobilier}</p>

                <div className="images-ad-details">
                    <img src='/images/video-immobilier.jpg' alt='image-immobilier' />
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
                                    <p><i class="fa-thin fa-person"></i>  Janet Richmond</p>
                                    <p><i class="fa-regular fa-phone"></i>  0559834573</p>
                                    <p><i class="fa-brands fa-facebook"></i>  Facebook</p>
                                    <p><i class="fa-brands fa-twitter"></i>  Instagram</p>
                                    <p><i class="fa-brands fa-linkedin"></i>  LinkedIn</p>
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