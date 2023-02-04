import { data } from 'autoprefixer';
import axios from 'axios'
import {
    LOGIN_SUCCESS , 
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    AUTHENTIFICATED_SUCCESS,
    AUTHENTIFICATED_FAIL,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
  }from './types'
  import {getListWilayasCommunes} from "./localisation"
/**********reset password confirm******************************* */

export const reset_password_confirm=(uid,token,new_password, re_new_password)=>async dispatch =>{
  const config = {
    headers : {
      'Content-type':'application/json'
    }
  };
  const body =JSON.stringify({uid,token,new_password,re_new_password});
  try{
    await axios.post(`http://127.0.0.1:8000/auth/users/reset_password_confirm/`, body,config);
    dispatch({
      type:PASSWORD_RESET_CONFIRM_SUCCESS
    });
  } catch(err){
      dispatch({
         type:PASSWORD_RESET_CONFIRM_FAIL
      })  
  }
};

/******************************************* */

export const reset_password=(email)=>async dispatch =>{
  const config = {
    headers : {
      'Content-type':'application/json'
    }
  };
  console.log("welcome in password ressetting")
  const body =JSON.stringify({email});
  try{
    await axios.post(`http://127.0.0.1:8000/auth/users/reset_password/`, body,config)
    dispatch({
      type:PASSWORD_RESET_SUCCESS
    });

  }catch(err){
    dispatch({
      type:PASSWORD_RESET_FAIL
    })  
  }
};
/******************************************** */
export const checkAuthenticated=()=> async dispatch=>{
  if(localStorage.getItem('access')){
     const config ={
         headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
         }
      };
      const body = JSON.stringify({token: localStorage.getItem('access')});
      try{
         const res = await axios.post(`http://127.0.0.1:8000/auth/jwt/verify`, body,config)
         
         if(res.data.code!=='token_not_valid'){
          dispatch({
            type:AUTHENTIFICATED_SUCCESS
          });
         }
      }catch(err){
         dispatch({
            type:AUTHENTIFICATED_FAIL
         });
   }
   }else{
     dispatch({
      type:AUTHENTIFICATED_FAIL
     })
  }
};

/***************************************** */

export const logout=()=> dispatch=>{
  console.log("welcome in logout function")
  dispatch({
    type:LOGOUT
  })
}



/********************************************* */
export const getUsers = ()=> async dispatch =>{
  console.log("welcome in getcontact")
  if(localStorage.getItem('access')){
    console.log("user have an access")
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    try{
        const res = await axios.get(`http://127.0.0.1:8000/api/localisation/list/`,config);
        console.log(res.data)
    }catch (err){
        console.log("getting contacts of user fail ")
    }
  }else{
    dispatch({
      type:LOGIN_FAIL
  })
  }
};
/**************************************************** */
export const load_user = () => async dispatch =>{
  if(localStorage.getItem('access')){
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    try{
        const res = await axios.get(`http://127.0.0.1:8000/accounts/me/`,config);
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:res.data,
        })
        console.log("load wilayas and communes")
        dispatch(getListWilayasCommunes())
    }catch (err){
        dispatch({
            type:LOGIN_FAIL
        })
    }
  }else{
    dispatch({
        type:LOAD_USER_FAIL
    })
  }
};

/************************* */

export const login = (email,password) => async dispatch =>{
   const config ={
    headers :{
        'Content-Type':'application/json'
    }
   };
   const body = JSON.stringify({email,password});
   try{
      console.log(body)
      console.log("welcome in login")
      const res = await axios.post(`http://127.0.0.1:8000/auth/jwt/create/`,body,config);
      console.log("dispatch login success")
      dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data,
      });
      console.log("loading user")
      dispatch(load_user());
   }catch(err){
    console.log("login fail")
    dispatch({
        type:LOGIN_FAIL,
      })
   }
};
/************************************************ */


export const signup = (prenom,nom,email,password,re_password) => async dispatch =>{
  console.log('welecome');
  const config ={
   headers :{
       'Content-Type':'application/json'
   }
  };
  console.log('welcome1');

  const body = JSON.stringify({prenom,nom,email,password,re_password});
  console.log("inside signup function :\n")
  console.log("body of request :")
  console.log(body)
  console.log(process.env.REACT_APP_API_URL)
  try{
     const res = await axios.post(`http://127.0.0.1:8000/auth/users/`,body,config);
     console.log(res); 
     dispatch({
       type:SIGNUP_SUCCESS,
       payload:res.data,
     });
      console.log("success")
      console.log(res.data)
  }catch(err){
   dispatch({
       type:SIGNUP_FAIL,
     })
     console.log("error")
  }
};
/****************************************************** */
export const verify = (uid,token)=> async dispatch =>{
  const config ={
    headers :{
        'Content-Type':'application/json'
    }
   };
   const body = JSON.stringify({uid,token});
   try{
       await axios.post(`http://127.0.0.1:8000/auth/users/activation/`,body,config);
      dispatch({
        type:ACTIVATION_SUCCESS,
      })
   }catch(err){
    dispatch({
        type:ACTIVATION_FAIL,
      })
   }
};
export const googleAuthenticate = (state, code) => async dispatch => {
  console.log("verification in googleauthenticate ")
  if (state && code && !localStorage.getItem('access')) {
      console.log("inside if authenticate ")
      const config = {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      };
      console.log("details dictionnary")
      const details = {
          'state': state,
          'code': code
      };

      const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' 
      + encodeURIComponent(details[key])).join('&');
      console.log("form body :"+formBody)
      try {
          const res = await axios.post(`http://127.0.0.1:8000/auth/o/google-oauth2/?${formBody}`, config);
          console.log("success")
          dispatch({
              type: GOOGLE_AUTH_SUCCESS,
              payload: res.data
          });
           console.log("load user")
           dispatch(load_user());
      } catch (err) {
          console.log("failure")
          dispatch({
              type: GOOGLE_AUTH_FAIL
          });
      }
  }
};
/********************************** */
