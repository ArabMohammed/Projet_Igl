import React ,{useState,Fragment} from "react";
import {Link,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {signup} from '../actions/auth'
import axios from 'axios';
const Signup = ({signup , isAuthenticated})=> {
    const [accountCreated,setAccountCreated]=useState(false);

    const [formData,setFormData]=useState({
        prenom:'',
        nom:'',
        email : '',
        password: '',
        re_password:''
    })
   
    const {prenom,nom,email,password,re_password}=formData;
    
    const onChange = e => setFormData({
         ...formData,[e.target.name]:e.target.value
    });

    const onSubmit = e =>{
        e.preventDefault();
        console.log("default has been prevented")
        if(password===re_password){
          console.log("working on signup")
          signup(prenom,nom,email,password,re_password);
          setAccountCreated(true);
          console.log("end of signup")
        }
    };
    
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/google`)
            console.log("result of redirect with google")
            console.log(res.data)
            window.location.replace(res.data.authorization_url);
        } catch (err) {
           console.log("error while signing up with google")
        } 
    };

    const ActivationEmailSent = ()=> {
        return (
        <div className="container ">
            <h3>An activation email has been sent to your account ,</h3>
            <h3>click on the verification link to continue the verification operation </h3>
        </div>
        )
    }
    return (
    <div className="container mt-5">
        <h1>Sign Up</h1>
        <p>Create your Account</p>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
             <input className="form-control" type="text"
               placeholder="Votre nom" name="nom" value={nom}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <div className="form-group">
             <input className="form-control" type="text"
               placeholder="Votre prenom" name="prenom" value={prenom}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <div className="form-group">
               <input className="form-control" type="email"
               placeholder="Votre email" name="email" value={email}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <div className="form-group">
               <input className="form-control" type="password"
               placeholder="Mot de passe" name="password" value={password}
               onChange={e => onChange(e)}
               required
               minLength={8}
               />
            </div>
            <div className="form-group">
               <input className="form-control" type="password"
               placeholder="Confirmation" name="re_password" value={re_password}
               onChange={e => onChange(e)}
               required
               minLength={8}
               />
            </div>
            <button className="btn btn-primary" type="submit" onSubmit={e => onSubmit(e)}>Register</button>
            <button className="btn btn-danger mt-3"onClick={continueWithGoogle}>
            Continue With Google
        </button>
        </form>
        <p className="mt-3">
            already have an account ? <Link to="/login">Login</Link>
        </p>
        {accountCreated ? ActivationEmailSent() : <Fragment></Fragment>}
    </div>
    )
}
const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps,{signup})(Signup);