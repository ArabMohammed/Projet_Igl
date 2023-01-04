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
        const res =await axios.put(`${process.env.REACT_APP_API_URL}/accounts/profilimage/update/`,form_data,config)
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

export const updateProfile=()=> async dispatch=>{
    console.log("welcome in getcontact")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
     };
     const profile={
        "nom":"seddiki",
        "prenom":"abdessamed",
        "email":"ka_seddiki@esi.dz",
        "numero_telephone":"07485523",
        "wilaya":1,
        "commune":1,
        "adresse":"rue wilaya bachar n50",
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