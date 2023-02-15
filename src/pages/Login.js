import React ,{useEffect, useState} from "react";
import {Link,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import axios from 'axios';
import {signup} from '../actions/auth'
import './CssFile/login.css';
import Footer from "../Components/Footer"
const Login = ({signup, login , isAuthenticated})=> {
  /*let userInput =document1.querySelector('[name=email_log]');
  let passWordInput =document1.querySelector('[name=password_log]');
  let onSubmitLog=()=>{
    let userValid 
  }*/
    const [formDataLog, setFormDataLog] = useState({
        email_log:'',
        password_log:'',
        })

    const [bool, setBool] = useState(true)
    const [formDataSign,setFormDataSign]=useState({
        prenom:'',
        nom:'',
        nomUtilisateur:'',
        email : '',
        password: '',
        re_password:''
    })

    const [accountCreated,setAccountCreated]=useState(false);

    const {email_log, password_log} = formDataLog;

    const {prenom,nom,email,password,re_password}=formDataSign;
    
    /* login methods */
     const onSubmitLog = e =>{
         console.log('hello login');
         e.preventDefault();
         console.log('hello login2');

         login(email_log,password_log);
         console.log('hello login3');

         console.log(isAuthenticated);
         console.log('hello login4');


     };

    const continueWithGoogleLog = async()=>{
        try{
            console.log("you are in login with f")
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google`);
            window.location.replace(res.data.authorization_url);
            
        }catch(err){
             console.log("error while continuing with google")
        }
    }
    /**************** fin login methods  ***************/

    /************* Signup methods *************/

    const onSubmitSign = e =>{
        console.log("default will be prevented")

        e.preventDefault();
        console.log("default has been prevented")
        if(password===re_password){
          console.log("working on signup")
          signup(prenom,nom,email,password,re_password);
          setAccountCreated(true);
          console.log("end of signup")
          
        } else {
            console.log("Mot de passe faux")
        }
    };
    
    const continueWithGoogleSign = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/google`)
            console.log("result of redirect with google")
            console.log(res.data)
            window.location.replace(res.data.authorization_url);
        } catch (err) {
           console.log("error while signing up with google")
        } 
    };

    const ActivationEmailSentSign = ()=> {
        return (
        <div className="container ">
            <h3>An activation email has been sent to your account ,</h3>
            <h3>click on the verification link to continue the verification operation </h3>
        </div>
        )
    }

    /*************** fin signup methods ***************/
    if(isAuthenticated){
        return(<Navigate to="/"/>)
    }

    const onChange = e => setFormDataSign({
        ...formDataSign,[e.target.name] : e.target.value
    });

    const onChange1 = e => setFormDataLog({
        ...formDataLog,[e.target.name] : e.target.value
    })

    /*useEffect(()=>{
    console.log(formDataLog)
    })*/

    const update1 = () =>{
    setBool(true)
    }

    const update2 = () =>{
    setBool(false)
    }

  return (
    <div>
      <div id="div01">
        <article>
          <h2>S'inscrire</h2>
          <h3>Acceuil&gt;&gt;S'inscrire</h3>
        </article>
      </div>
      <div id="buttons">
        <button id="connecter" onClick={update1}>
          S'inscrire
        </button>
        <button id="inscrire" onClick={update2}>
          Se connecter
        </button>
      </div>
      {bool &&
      <section id="login_signin">
        <form onSubmit={onSubmitSign}>
          <input type="text" placeholder="Nom"  name="nom" onChange={onChange}/>
          <input type="text" placeholder="Prénom"  name="prenom" onChange={onChange}/>
          <input type="email" placeholder="Adresse Email" name="email" onChange={onChange} className="email-login" />
          <input type="password" placeholder="Mot de passe"  name="password" onChange={onChange} className="email-login"/>
          <input type="password" placeholder="Confirmer le mot de passe" name="re_password" onChange={onChange} className="email-login"/>
          <input type="submit" value="S'inscrire" id="validate" onSubmit={e => onSubmitSign(e)}/>
        </form>
      </section>}

      {!bool &&
      <section id="login_signin">
        <form onSubmit={onSubmitLog}>
      <input type="text" placeholder="Nom d'utilisateur" name="email_log" onChange={onChange1} className="email-login"/>
      <input type="password" placeholder="Mot de passe" name="password_log" onChange={onChange1} className="email-login"/>
      <div id="did">
        <span> <input type="checkbox" /><label>Rappelez-moi</label></span>
        <a href="">Mot de passe oublié</a>
      </div>
      <input type="submit" value="valider" id="validate"/>
    </form>
      </section>}

      <Footer />

    </div>
  );
    
    
}
const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps,{signup, login})(Login);