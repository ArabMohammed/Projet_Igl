
import React ,{useState,Fragment} from "react";
import {Link,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {reset_password} from '../actions/auth'
const ResetPassword = ({reset_password })=> {
    const [requestSent,setRequestSent]=useState(false);
    const [formData,setFormData]=useState({
        email : ''
    })
    const {email,password}=formData;
    const onChange = e => setFormData({
         ...formData,[e.target.name]:e.target.value
    });
    const onSubmit = e =>{
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    };

    const resetPasswordEmailSent =()=>{
        return(
        <div>
            <h3>A ResetPasswordEmail has been sent to your account click on the reset link to continue the reset operation </h3>
        </div>
        );
       }
    
    return (
    <div className="container mt-5">
        <h1>Request Passsword Reset</h1>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
               <input className="form-control" type="email"
               placeholder="email" name="email" value={email}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <button className="btn btn-primary" type="submit" onSubmit={e => onSubmit(e)}>Reset Password</button>
        </form>
        {requestSent ? resetPasswordEmailSent() : <Fragment></Fragment>}
    </div>
    )
}

export default connect(null,{reset_password})(ResetPassword);