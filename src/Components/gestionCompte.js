import React from 'react'
import utilisateurImg from '../images/utilisateur.png'
import './help.css'

function gestionCompte() {
  return (
    <>
        <div className='gestion-compte-container'>
            <div>
                <div className='img-gesCompte-container'><img src={utilisateurImg} alt='' />
                    <h2>Gestion des Comptes</h2>
                </div>
                <h3>Comment créer un compte sur DzEstates ?</h3>
                <p>
                    1. Cliquez sur “S'inscrire'” en haut à droite de la page d'accueil du site.<br></br>
                    2. Renseignez votre Nom et prenom , (Notez bien qu'ils seront au tant
                    que votre nom d'utilisateur sur le site) .<br></br>
                    3. Renseignez votre adresse email. Attention, un E-mail de validation va vous être 
                    envoyé à cette adresse, vérifiez donc sa conformité.<br></br>
                    4. Définissez votre mot de passe.<br></br>
                    5. Confirmez votre mot de passe.<br></br>
                    6. Validez les informations saisis .
                    7. La création de votre compte est finalisée !<br></br>
                </p>
            </div>
            <div>
                <h3>Qu'est je dois faire si j'oublie le mot de passe de mon compte ?</h3>
                <p>
                    1. Cliquez sur “Se connecter” en haut à droite de la page d'accueil du site.<br></br>
                    2. Cliquez sur “mot de passe oublié” .<br></br>
                    3. Renseignez votre adresse email. Attention, un E-mail de vérification va vous être 
                    envoyé à cette adresse, vérifiez donc sa conformité.<br></br>
                    4. Cliquez sur lien compris dans l' E-mail envoyé.<br></br>
                    5. réinitialiser votre mot de passe.<br></br>
                    6. Confirmez le mot de passe .
                    6. La réinitialisation de votre mot de passe est finalisée ! Vous pous maitenant 
                    connecter à votre compte de nouveau .<br></br>
                </p>
            </div>
        </div>
    </>
  )
}


export default gestionCompte