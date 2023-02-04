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
  export const envoyerMessage = ()=> async dispatch =>{
    console.log("welcome in envoyer message")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      /* global BigInt */
      
      const message={
        "annonce_id":23,
        "contenu":"bonjour monsieur j'espere que vou étes en bon santé",
      };
      const body = JSON.stringify(message);
      try{
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/messages/create/`,body,config);
          console.log(res.data)
      }catch (err){
          console.log("create a new contact fail ")
      }
    }else{
      dispatch({
        type:LOGIN_FAIL
    })
    }
  };
  export const updateBoiteMessage = ()=> async dispatch =>{
    console.log("welcome in envoyer message")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      /* global BigInt */
      try{
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/messages/updatelist/`,config);
          console.log(res.data)
      }catch (err){
          console.log("create a new contact fail ")
      }
    }else{
      dispatch({
        type:LOGIN_FAIL
    })
    }
  };