import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


function Navbar({logout, isAuthentificated}){
    
    const [showed, setShowed] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function handleClick(){
         setShowed((showed) => {
            return (!showed);
        })
    }

    const logout_user = () => {
        console.log("logout")
        setRedirect(true);
        logout();
    
    }
    
    if(redirect){
        console.log("isAuthenticated is true")
        return(<Navigate to="/"/>)
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
                                    <Link className={item.className} to={item.url}>{item.title} </Link>
                                </li>
                            )
                        })
                    }

                        <li class="list-navbar">
                            <a className="nav-item-navbar" herf='#!' onClick={logout_user}>Logout </a>
                        </li>
    
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
const mapStateToProps = state => ({
    isAuthentificated : state.auth.isAuthenticated
})
export default connect(mapStateToProps, {logout}) (Navbar);