import React from "react";
import AdsImage from "../images/image00.png"

function GestionAds(){
    return(
        <>
            <div className="gestionAds-Help-container">
            <div className='img-gesAds-container'><img src={AdsImage} alt='' />
                    <h2>Gestion des Annonces</h2>
                </div>
                <h3>Comment déposer une annonce ?</h3>
                <ul>
                    <li>accédez au dépôt d'annonce en cliquant sur "Déposer une annonce"<br></br>
                        <span>Note:</span>pour déposer une annonce vous devez être connecté ou bien vous créer un compte DzEstates.
                    </li>
                    <li>renseignez les informations principales de l'annonce en remplissant les champs requis</li>
                    <li>ajoutez des photos(Vous pouvez ajouter jusqu'à 3 photos gratuitement sur l'ensemble des catégories, 
                        et jusqu'à 10 photos gratuitement dans les catégories décoration, linge de maison, art de la table, 
                        chaussures, vêtements, vêtements bébé et les familles loisirs et multimédia.)</li>
                    <li>finalisez et publiez l'annonce en cliquant sur "déposer"</li>
                </ul>
                <h3>Comment rechercher une annonce ?</h3>
                <ul>
                    <li>Rendez-vous sur le moteur de recherche de la page d'accueil</li>
                    <li>Sélectionner la catégorie du bien, service ou emploi que vous recherchez.</li>
                    <li>Affiner votre recherche en renseignant les filtres associés à la catégorie.</li>
                    <li>Renseignez un ou plusieurs mots-clés dans le moteur de recherche.</li>
                    <li>Saisissez une localisation. Vous pouvez recherchez dans Toute la France ou additionner
                    jusqu'à 10 localisations différentes (des régions et les régions voisines, des départements 
                    et les départements voisins, des villes et des codes postaux). À tout moment vous pouvez 
                    supprimer les localisations qui ne sont pas adaptées à votre nouvelle recherche, ou en ajouter. 
                    En saisissant une localisation, vous pourrez retrouver les localisations de vos trois dernières 
                    recherches.</li>
                </ul>
            </div>
        </>
    ) ;
}
export default GestionAds ;