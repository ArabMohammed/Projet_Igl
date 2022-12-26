import React ,{Fragment,useState} from "react";
import {Link,Navigate,useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {reset_password_confirm} from '../actions/auth'
const ResetPasswordConfirm = ({ reset_password_confirm})=> {
    
    const params= useParams();

    const [requestSent,setRequestSent]=useState(false);
    
    const [formData,setFormData]=useState({
        new_password : '',
        re_new_password :''
    });

    const {new_password,re_new_password}=formData;

    const onChange = e => setFormData({
         ...formData,[e.target.name]:e.target.value
    });

    const onSubmit = e =>{
        e.preventDefault();
        const uid =params.uid;
        const token = params.token;
        reset_password_confirm(uid,token,new_password,re_new_password);
        setRequestSent(true);
    };
    
    const resetPasswordDone =()=>{
        return(
        <div>
            <h3>Your Account password has been reset succefully you will be redirected to the login page in 5 seconds </h3>
        </div>
        );
    }
    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const handleClick1 = async event => {
        console.log('start handleclick1');
        await sleep(5000);
        console.log('start handleclick2');
        return(<Navigate to="/login"/>) ;
    };
    if(requestSent){
        return(<Navigate to="/login"/>) ;
        //handleClick1();
    };
    return (
    <div className="container mt-5">
        <h1>Request Passsword Reset</h1>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
               <input className="form-control" 
               type="password"
               placeholder="New password" name="new_password"
               value={new_password}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <div className="form-group">
               <input className="form-control" 
               type="password"
               placeholder="Confirm New password" name="re_new_password"
               value={re_new_password}
               onChange={e => onChange(e)}
               required
               />
            </div>
            <button className="btn btn-primary" type="submit">Reset Password</button>
        </form>
        {requestSent ? resetPasswordDone() : <Fragment></Fragment>}
    </div>
    )
}

export default connect(null,{reset_password_confirm})(ResetPasswordConfirm);