import React, { Fragment, useState } from 'react';
import { Link, Navigate, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
<<<<<<< HEAD
import {createAnnonce ,rechercheAnnonce ,getAnnonceDetail ,DeleteAnnonce } from '../actions/annonces'
import { createContact } from '../actions/contacts';
import {updateProfile} from '../actions/profile';
const Navbar = ({ logout, isAuthenticated,createAnnonce,
    createContact,rechercheAnnonce ,getAnnonceDetail,DeleteAnnonce,updateProfile}) => {
=======

const Navbar = ({ logout, isAuthenticated }) => {
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        setRedirect(true);
        logout();
    };
    
    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
<<<<<<< HEAD
        <Fragment>
         <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
         </li>
         <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={updateProfile}>creer annonce</a>
         </li>
        </Fragment>
=======
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </li>
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
    );
    if(redirect){
      console.log("isAuthenticated is true")
      return(<Navigate to="/"/>)
  }
    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link className='navbar-brand' to='/'>Auth System</Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
                        </li>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

<<<<<<< HEAD
export default connect(mapStateToProps, {logout,createAnnonce,createContact,rechercheAnnonce,getAnnonceDetail,DeleteAnnonce,updateProfile})(Navbar);
=======
export default connect(mapStateToProps, { logout })(Navbar);
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
