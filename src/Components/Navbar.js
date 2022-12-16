import React from 'react';
import { CgAdd } from "react-icons/cg";


function Navbar(){
    return(
        <>
        <Navbar class="navbar">
            <div class="navbar-logo">
                <img src="" alt="Logo-image"></img>
            </div>

            <div class="list">
                <div class="items-list">
                    <a href="">Accueil</a>
                    <a href="">Aide</a>
                    <a href="">Compte</a>
                </div>
                <div class="button-dep">
                    <button>
                        <CgAdd /> <span>Déposer Annonce</span>
                    </button>
                </div>
            </div>
        </Navbar>
        </>
    )
}

export default Navbar;