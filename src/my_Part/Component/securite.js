import React from "react";
import SecImg from "../images/imae02.png"

function Securite(){
    return(
        <>
            <div className="security-part-container">
            <div className='img-Security-container'><img src={SecImg} alt='' />
                    <h2>Securite et Confidentialite</h2>
                </div>
                <h3>Comment choisir un bon mot de passe pour mon compte ?</h3>
                <p>
                Votre mot de passe doit comporter :
                    -8 caractères minimum<br></br>
                    -1 chiffre minimum<br></br>
                    -1 lettre minuscule minimum<br></br>
                    -1 lettre majuscule minimum<br></br>
                    -50 caractères maximum<br></br>
                    Pour vous protéger au mieux, évitez de mentionner dans votre mot de passe 
                    des informations personnelles facilement accessibles 
                    (date de naissance, prénom d'un proche, prénom d'un animal de compagnie, etc).
                </p>
                <h3>Bonnes pratiques générales sur la gestion de vos mots de passe</h3>
                <ul>
                        <li>Utilisez un mot de passe différent pour chaque compte.</li>
                        <li>Changez votre mot de passe au moindre doute.</li>
                        <li>Ne communiquez jamais votre mot de passe, même à une personne de votre entourage.</li>
                        <li>N'utilisez pas votre mot de passe sur un ordinateur partagé.</li>
                        <li>Choisissez un mot de passe particulièrement complexe pour votre boîte mail.</li>
                        <li>Envisagez l'utilisation d'un gestionnaire de mots de passe, une solution sécurisée
                            qui mémorise pour vous l'ensemble de vos mots de passe.</li>
                </ul>
                <h3>Reconnaître un comportement suspect</h3>
                <ul>
                    <li>Vérifier l'adresse email de l'expéditeur .</li>
                    <li>Vous avez reçu un email / un sms ou un message depuis la messagerie vous 
                    demandant des informations personnelles (exemple : email, numéro de téléphone,
                    documents d'identité, coordonnées bancaires…) ou qui contiennent des liens externes 
                    qui peuvent être frauduleux. Prudence, il peut s'agir de phishing ou smishing.</li>
                    <li>La présence de fautes d'orthographe et/ou de typographie : vous avez un doute sur la 
                    formulation des messages, vous constatez des fautes d'orthographe, ce sont des signes de 
                    malveillance. Attention les emails peuvent facilement intégrer les logos et codes couleur de la 
                    marque DzEstates.</li>
                </ul>
                <h3>Reconnaître un message douteux</h3>
                <ul>
                <span>Si un acheteur vous contacte et :</span>
                    <li>Vous demande l'ensemble de vos coordonnées personnelles.</li> 
                    <li>Vous propose un paiement par Mandat Cash, Paypal ou Western Union par exemple.</li>
                    <li>Vous signale qu'il est momentanément à l'étranger.</li>
                    <li>Vous demande des informations confidentielles (fiches de paye, impôts sur le revenu, pièces d'identité).</li>
                    <li>Vous invite à dialoguer en dehors de la messagerie du site.</li>
                    <li>Dans chacun de ces cas, nous vous invitons à être vigilant.</li>
                </ul>
            </div>
        </>
    ) ;
}
export default Securite ;