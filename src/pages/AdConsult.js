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
            <Navbar />
            <AdDetails
             titre = {location.state.titre}
             prix = {location.state.prix}
             surface= {location.state.surface}
             adress={ location.state.adresse_bien_immobilier}
             date = {location.state.date_publication}
             src= {location.state.pk}
             description= {location.state.description}
             categorie= {location.state.categorie_immobilier}
             type= {location.state.type_immobilier}
             unite= {location.state.unite_prix}
             wilaya= {location.state.wilaya}
             commune= {location.state.commune}
             unite_prix={location.state.unite_prix}
            />
            <Footer />
        </>
    )
}

export default AdConsult;