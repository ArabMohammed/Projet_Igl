import { data } from 'autoprefixer';
import axios from 'axios'
import DateObject from "react-date-object";
import {
    LOGIN_FAIL,
  }from './types'

export const updateProfileImage = (image_url)=> async dispatch =>{
    console.log("welcome in getcontact")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'multipart/form-data',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      const form_data=new FormData();
      if(image_url!==""){
        console.log("create loading profile image form")
        console.log(image_url)
        console.log(image_url.name)
        form_data.append("image_url",image_url,image_url.name);
        console.log("success")
        const res =await axios.put(`${process.env.REACT_APP_API_URL}/accounts/me/profilimage/update/`,form_data,config)
        console.log(res.data)
      }else{
        console.log("you have not selected any image")
      }
    }else{
      console.log("user is looged out")
      dispatch({
        type:LOGIN_FAIL
    })
    }
  };

export const updateProfile=(nom, prenom, email, numro_telephone, wilaya, commune, date_naiss)=> async dispatch=>{
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
     };
     const date_naissance = new DateObject(date_naiss);
     console.log(date_naissance.format("YYYY-MM-DD"))
     console.log(nom+" "+prenom+" "+email+" "+numro_telephone+" "+wilaya+" "+commune+" "+date_naiss)
     const profile={
        "nom": nom,
        "prenom": prenom,
        "email": email,
        "numero_telephone":numro_telephone,
        "wilaya": wilaya,
        "commune":commune,
        "date_naissance": date_naissance.format("YYYY-MM-DD")
     }
     
     const form_data=JSON.stringify(profile);
     const res =await axios.put(`${process.env.REACT_APP_API_URL}/accounts/me/updateprofile/`,form_data,config)
     console.log(res.data)
     }
     else{
      console.log("user is looged out")
      dispatch({
        type:LOGIN_FAIL
     })
     }
};