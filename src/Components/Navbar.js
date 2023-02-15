import React, { useState ,Fragment } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/auth';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


function Navbar({logout, isAuthentificated}){


    let navigate = useNavigate()
    const clickHand = () => {
        let path=''
        if(isAuthentificated) {
            path='/'
        }  else {
            path = '/login'
        }
        navigate(path)
    }
    
    const [showed, setShowed] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function handleClick(){
        /*
         setShowed((showed) => {
            return (!showed);
        })*/
        if(isAuthentificated){
            return(<Navigate to="/publier"/>)
        }
    }
    const guestLinks = () => (
        <Fragment>
           {MenuItems.map((item, index) => {
            return(                               
                    <li key={index} class="list-navbar">
                        <Link className={item.className} to={item.url}>{item.title} </Link>
                    </li>
                    )
            })}
            <li class='list-navbar'>
               <Link className='nav-item-navbar' to='/login'>Login</Link>
            </li>
            <li class='list-navbar'>
            <Link to="/login">
                       <button class="button-dep-navbar" onClick={clickHand}>
                           <i class="fa-solid fa-plus"></i>
                          <span class="dep-text-navbar">Déposer Annonce</span>
                       </button>
                    </Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
        {MenuItems.map((item, index) => {
            return(                               
                    <li key={index} class="list-navbar">
                        <Link className={item.className} to={item.url}>{item.title} </Link>
                    </li>
                    )
            })}
         <li class='list-navbar'>
           <Link className='nav-item-navbar' to='/compte' >Compte</Link>
         </li>
         <li class='list-navbar'>
            <Link className='nav-item-navbar' to='/compte/me_messages' >Messages</Link>
         </li>
         <li class='list-navbar'>
            <Link className='nav-item-navbar' to='#!' onClick={logout_user}>Logout</Link>
         </li>
         <li class='list-navbar'>
         <Link to="/publier">
            <button class="button-dep-navbar" onClick={clickHand}>
            <i class="fa-solid fa-plus"></i>
             <span class="dep-text-navbar">Déposer Annonce</span>
            </button>
        </Link>
         </li>
        </Fragment>
        
    );
    const logout_user = () => {
        console.log("logout")
        setRedirect(true);
        logout();
    
    }
    return(
        <>
        <nav class="navbar-navbar">
            <div class="navbar-logo-navbar">
                <img src="images/logo.png" alt="Logo-image"></img>
            </div>
            <div>
                <i className = {showed ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
            </div>
            <div class={showed ? "navbar-portion-navbar active" : "navbar-portion-navbar"}>
                    <ul class="items-list-navbar" >
                    { isAuthentificated ? authLinks() : guestLinks()}
                    </ul>
            </div>
        </nav>
        </>
    )
}
const mapStateToProps = state => ({
    isAuthentificated : state.auth.isAuthenticated
})
export default connect(mapStateToProps, {logout}) (Navbar);