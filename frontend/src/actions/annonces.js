import { data } from 'autoprefixer';
import axios from 'axios'
import DateObject from "react-date-object";
import {
    LOGIN_FAIL,
  }from './types'
/************************************************************ */
export const createAnnonce=()=> async dispatch =>{
  if(localStorage.getItem('access')){
    console.log("user have an access to create Annonce")
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    /* global BigInt */
    const annonce={
            /********************* */
            'titre':"nouveau annonce",
            'description':"une terre agricule vaste",
            'prix':'12457889',
            'surface':'2000000',
            /**************** */
            'categorie_immobilier':'Vente',
            'type_immobilier':'Terrain',
            'unite_prix':'Da',
            /****************** */
            'adresse_bien_immobilier':'rue wilaya alger',
            'wilaya':1,
            'commune':1,
            /********************** */
            'contact':1,
            /********************* */
            'vendu':false,
            'public':true,
            'parking':false,
            'terrasse':false,
            'garage':false,
            'meuble':false,
            'eau':false,
            'gaz':false,
            'electricite':false,
            /******************* */
    };
    const body = JSON.stringify(annonce);
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/annonces/create/`,body,config);
        console.log(res.data)
    }catch (err){
        console.log("create a new contact fail ")
    }
  }else{
    dispatch({
      type:LOGIN_FAIL
  })
  }
}
/************************************************************** */
export const loadImages = (image_url,id_annonce)=> async dispatch =>{
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
        console.log("create loading image form")
        form_data.append("image_url",image_url,image_url.name);
        form_data.append("id_annonce",id_annonce);
        const res =await axios.post(`${process.env.REACT_APP_API_URL}/api/annonces/loadimages/`,form_data,config)
        console.log(res)
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
  /************************************************* */
  export const getImagesNumberAnnonce = (annonce_id)=> async dispatch =>{
    console.log("welcome in create contact")
    if(localStorage.getItem('access')){
      console.log("user have an access")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      const params = new URLSearchParams([['annonce_id', annonce_id]]);
      try{
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonces/list/`,{params},config);
          return res.data
      }catch (err){
          console.log("create a new contact fail ")
      }
    }else{
      dispatch({
        type:LOGIN_FAIL
    })
    }
  };
/******************************/
export const rechercheAnnonce=()=>async dispatch =>{
  if(localStorage.getItem('access')){
    console.log("user have an access to research annonce")
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    const date_debut= new DateObject("2022/01/02")
    const date_fin= new DateObject("2023/01/05")
    console.log(date_debut.format("YYYY-MM-DD"))
    console.log(date_fin.format("YYYY-MM-DD"))
    const params = new URLSearchParams([
      ['type','Terrain'],
      ['categorie','Vente'],
      ['date_debut',date_debut.format("YYYY-MM-DD")],
      ['date_fin',date_fin.format("YYYY-MM-DD")],
      ['wilaya',''],
      ['commune',''],
      ['search_query','']
    ]);
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonces/research/`,{params},config);
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
export const getAnnonceDetail=()=>async dispatch =>{
  if(localStorage.getItem('access')){
    console.log("user have an access to research annonce")
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    const id_annonce=1
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonces/${id_annonce}/`,config);
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
export const DeleteAnnonce=()=>async dispatch =>{
  if(localStorage.getItem('access')){
    console.log("user have an access to research annonce")
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    const id_annonce=1
    try{
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/annonces/delete/${id_annonce}/`,config);
        console.log(res.data)
    }catch (err){
        console.log("create a new contact fail ")
    }
  }else{
    dispatch({
      type:LOGIN_FAIL
  })
  }
}