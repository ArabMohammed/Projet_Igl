import React from "react";
import { Link } from "react-router-dom";
import ProblemImg from "../images/images 03.png"

function SignalerProblem(){
    return(
        <>
            <div className="problem-signal-container">
            <div className='img-Problem-container'><img src={ProblemImg} alt='' />
                    <h2>Gestion des Comptes</h2>
                </div>
                <h3>Comment Signaler Un probleme Dans le site "DzEsates"</h3>
                <p>
                    Pour pouvoir nous transmettre votre probleme il suffit de nous 
                    contacter via l'adresse mail suivante 
                    <Link className="lien-problem" to="#">DzEstates@gmail.com</Link>
                </p>
            </div>
        </>
    ) ;
}
export default SignalerProblem ;
