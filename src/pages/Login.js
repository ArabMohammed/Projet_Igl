import React ,{useState} from "react";
import {Link,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import axios from 'axios';
const Login = ({login , isAuthenticated})=> {
    const [formData,setFormData]=useState({
        email : '',
        password: '' 
    })

    const {email,password}=formData;
    
    const onChange = e => setFormData({
         ...formData,[e.target.name]:e.target.value
    });
    
    const onSubmit = e =>{
        console.log('hello login');
        e.preventDefault();
        console.log('hello login2');

        login(email,password);
        console.log('hello login3');

        console.log(isAuthenticated);
        console.log('hello login4');

    };

    const continueWithGoogle = async()=>{
        try{
            console.log("you are in login with f")
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google`);
            window.location.replace(res.data.authorization_url);
            
        }catch(err){
             console.log("error while continuing with google")
        }
    }

    if(isAuthenticated){
        return(<Navigate to="/"/>)
    }
    
    return (
    <div className="container mt-5">
        <h1>Sign In</h1>
        <p>Sign into your account</p>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
               <input className="form-control" type="email"
               placeholder="email" name="email" value={email}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <div className="form-group">
               <input className="form-control" type="password"
               placeholder="password" name="password" value={password}
               onChange={e => onChange(e)}
               required
               minLength={8}
               />
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
        <button className="btn btn-danger mt-3"onClick={continueWithGoogle}>
            Continue With Google
        </button>
        <p className="mt-3">
            Don't have an account ? <Link to="/signup">Signup</Link>
        </p>
        <p className="mt-3">
            Forget your password ? <Link to="/reset-password">Reset password</Link>
        </p>
    </div>
    )
}
const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login);