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
    LOAD_WILAYA_COMMUNES,
  }from './types'
/************************************************************ */
export const getUserLocalisations = ()=> async dispatch =>{
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
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/localisation/list/`,config);
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
/***************************************************** */
export const createLocalisation = ()=> async dispatch =>{
    console.log("welcome in create localisation")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      const localisation={
        "wilaya":3,
        "commune":20,
        "adresse_bien_immobilier":"rue creation react"
      }
      const body = JSON.stringify(localisation);
      try{
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/localisation/create/`,body,config);
          console.log(res.data)
      }catch (err){
          console.log("create a new localisation fail ")
      }
    }else{
      dispatch({
        type:LOGIN_FAIL
    })
    }
  };
/****************************** *
export const UpdateLocalisation = ()=> async dispatch =>{
    console.log("welcome in update localisation")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      const id_localisation=4
      const localisation={
        "wilaya":3,
        "commune":20,
        "adresse_bien_immobilier":"rue creation react 2 update "
      }
      const body = JSON.stringify(localisation);
      try{
          const res = await axios.update(`${process.env.REACT_APP_API_URL}/api/localisation/${id_localisation}/update/`,body,config);
          console.log(res.data)
      }catch (err){
          console.log("create a new localisation fail ")
      }
    }else{
      dispatch({
        type:LOGIN_FAIL
    })
    }
  };
/********* */
  export const getListWilayasCommunes = () =>async dispatch =>{
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      try{
          const res = await axios.get(`http://127.0.0.1:8000/api/localisation/dict_wilayas_communes/`,config);
          console.log(res.data)
          console.log("\n\n")
          console.log(res.data["wilayas"][0])
          console.log(res.data["wilayas"][0].nom)
          dispatch({
            type:LOAD_WILAYA_COMMUNES,
            payload:res.data,
          });

      }catch (err){
          console.log("receiving of wilayas and communes list fails")
      }
    }else{
      dispatch({
        type:LOGIN_FAIL
    })
    }

  }