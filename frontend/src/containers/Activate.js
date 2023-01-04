import React ,{useState} from "react";
import {Link,Navigate,useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {verify} from '../actions/auth'
import axios from 'axios';
const Activate = ({verify})=> {
    const [verified,setVerified]=useState(false);
    const params = useParams();   
    const verify_account = e =>{  
        const uid = params.uid;
        const token = params.token;
        verify(uid,token);
        setVerified(true);
    };
    if(verified){
        return(<Navigate to="/login"/>)
    }
    return (
    <div className="container ">
        <div className="d-flex flex-column justfy-content-center align-items-center"
        style={{marginTop:'200px'}}>
         <button 
            onClick={verify_account}
            style={{marginTop:'50px'}}
            type='button'
            className="btn btn-primary"
         >
           Verify
         </button>
        </div>
     
    </div>
    )
}

export default connect(null,{verify})(Activate);