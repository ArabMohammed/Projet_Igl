import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AdDetails from "../Components/AdDetails";
import { useLocation } from "react-router";

function AdConsult(){
    const location = useLocation();
    console.log("location + " , location)
    return(
        <>
            <AdDetails
             nom={location.state.utilNom}
             prenom = {location.state.utilPrenom}
             titre = {location.state.titre}
             prix = {location.state.prix}
             surface= {location.state.surface}
             adresse_bien_immobilier={ location.state.adresse_bien_immobilier}
             date = {location.state.date_publication}
             src= {location.state.src}
             description= {location.state.description}
             categorie= {location.state.categorie_immobilier}
             type= {location.state.type_imusermobilier}
             unite= {location.state.unite_prix}
             wilaya= {location.state.wilaya}
             commune= {location.state.commune}
             unite_prix={location.state.unite_prix}
             contact={location.state.contact}
            />
            <Footer />
        </>
    )
}

export default AdConsult;