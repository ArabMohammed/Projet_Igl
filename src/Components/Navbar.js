import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    
    const [showed, setShowed] = useState(false);
    function handleClick(){
         setShowed((showed) => {
            return (!showed);
        })
    }
    
    return(
        <>
        <nav class="navbar-navbar">
            <div class="navbar-logo-navbar">
                <img src="" alt="Logo-image"></img>
            </div>
            <div>
                <i className = {showed ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
            </div>
            <div class={showed ? "navbar-portion-navbar active" : "navbar-portion-navbar"}>
                <ul class="items-list-navbar">
                    {
                        MenuItems.map((item, index) => {
                            return(                               
                                <li key={index} class="list-navbar">
                                    <Link className={item.className} to={item.url}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <button class="button-dep-navbar">
                        <i class="fa-solid fa-plus"></i>
                        <span class="dep-text-navbar">Déposer Annonce</span>
                    </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;