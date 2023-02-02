import UserImage from '../images/user_preview.jpg';
import AdsManagImag from '../images/AdsManagement.jpg' ;
import contactImg from '../images/images.png' ;
import securityImg from '../images/graphic-cartoon-character-cyber-security-vector-35150857.jpg' ;
import problemImg from '../images/problem.png'


const elementList = [
  {
    titre :"Gestion des Comptes ",
    lien :"/aide/gestion des comptes",
    image :UserImage,
    description:"Découvrez comment créer et gérer votre compte DzEstates"
  },
  {
    titre :"Gestion des annonces ",
    lien :"/aide/gestion des annonces",
    image :AdsManagImag,
    description:"Découvrez comment gérer vos annonces et effectuer des recherchres efficaces dans DzEstates"
  },
  {
    titre :"contacter l'annonceur ",
    lien :"/aide/contacter l'annonceur",
    image :contactImg,
    description:"Découvrez comment fonctionne le service de contact annonceur sur DzEsates"
  },
  {
    titre :"confiance et securite",
    lien :"/aide/confiance et securite",
    image :securityImg,
    description:"Découvrez comment reconnaitre un comportement suspect sur DzEstates et nos conseils de sécurité"
  },
  {
    titre :"Signaler un probleme dans le site",
    lien :"/aide/problem",
    image :problemImg,
    description:"Décrire votre problème pour que nous puissions vous aider"
  },
]

export default elementList