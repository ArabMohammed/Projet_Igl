import { data } from 'autoprefixer';
import axios from 'axios'
import {
    LOGIN_FAIL,
  }from './types'
/************************************************************ */
export const getUserContacts = ()=> async dispatch =>{
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
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacts/list/`,config);
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

/************************************************************ */
export const createContact = ()=> async dispatch =>{
    console.log("welcome in create contact")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      /* global BigInt */
      
      const contact={
        "nom":"moh arab",
        "adresse":"rue indepndance n50",
      };
      const body = JSON.stringify(contact);
      try{
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/create/`,body,config);
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
/****************************** */