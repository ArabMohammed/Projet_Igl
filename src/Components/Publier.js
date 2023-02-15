import "./Publier.css";
// import img1 from '../images/map'
import "../pages/CssFile/home.css"
import React, { useEffect } from "react";
import { useState } from "react";
import { loadImage } from "../actions/annonces";
import axios from "axios";
import { LOGIN_FAIL } from "../actions/types";
import { connect } from "react-redux";

function Publier({loadImage}){
     ///////////////////////////////////////

     

  const [contacts, setContacts] = useState([])

  let listcontact = []
  function  getUserContacts(){

     return async dispatch =>{
      if(localStorage.getItem('access')){
        console.log("user have an access")
        const config ={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        };
        try{
             axios.get(`http://127.0.0.1:8000/api/contacts/list/`,config).then((res)=>{
             const contacts = res.data 
             console.log(contacts)
             contacts.forEach(element => {
              listcontact.push({
                pk:element.pk,
                info:element.nom+" "+element.email+" "+element.adresse+" "+element.commune+" "+element.wilaya
              })
              });
              setContacts(listcontact)
              console.log("la lsite des contacts : "+listcontact[0].pk)
             })
             }catch (err){
             console.log("getting contacts of user fail ")
            }
      }else{
        dispatch({
          type:LOGIN_FAIL
      })
      }
    };
  }
  
  useEffect(() => getUserContacts(),[])

    ///////////////////////////////////////
    const [value, setValue] = useState(1);
    const [formData, setFormData] = useState({
        type: "Appartement",
        categorie: "Vente",
        titre:"",
        description:"",
        DateDebut: "",
        DateFin: "",
        wilaya: "1",
        commune: "1",
        champ_recherche: "",
        prix:"0",
        unite_prix:"Da"
    });
  
  
  const wilayaList = [];
  const communeList = [];
  const wilayas_communes = JSON.parse(localStorage.getItem("wilayas_communes"));

  const wilayas = wilayas_communes["wilayas"];
  const communes = wilayas_communes["communes"];
   //////////////////////////////////////////////:

   function handleChange(event) {
    // console.log(event.target.value)
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }
  
  ///////////////////////////////////////////////:
  
  for (let i = 0; i < wilayas.length; i++) {
    wilayaList.push(wilayas[i].nom);
  }
 
  
  //////////////////////////////////////////
  
  function handleChangeWilaya(event) {
    setValue(Number([event.target.value]) + 1);
    let numWilaya = Number([event.target.value]) + 1;
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
    setValue(numWilaya)
    for (let i = 0; i < communes.length; i++) {
      if (Number(communes[i].wilaya) == numWilaya) {
        communeList.push(communes[i]);
      }
    }
    console.log("la liste des communes :")
    console.log(communeList)
  }
  ////////////////
  
  for(let i=0; i<communes.length; i++){

    if(Number(communes[i].wilaya) === value){
        communeList.push(communes[i])
    }
  }

  ///////////////////////////////////////////////////
  
  function handleChangeCommune(event) {
    let numComm = Number([event.target.value]) + 1;
    console.log(" la valeur est" + numComm);
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  /////////////////////////////////////////////////////
  
const [show, setshow] = useState(false);
const click = (e) => {
  e.preventDefault();
  setshow(!show);
};
  ////////////////////////////////////////////////////////////////
const [formImages,setFormImages]=useState({
    images_urls :[],
})
const {images_urls}=formImages;
/************** */
/************************* */
const handleImageChange = (e) => {
    //console.log(name.files)
    let newData = { ...formImages };
    newData["images_urls"]=e.target.files
    setFormImages(newData);
};
/************************** */
const nb_annonce=1
for(let i=0; i<images_urls.length; i++){
  loadImage(images_urls[i], nb_annonce)
}

  ///////////////////////////////////////////////////////////////
  /***********************************************************/
  /************************************************************/
  const createAnnonce=()=>{
    console.log("test A");
    if(localStorage.getItem('access')){
      console.log("user have an access to create Annonce")
      const config ={
          headers:{
              'Content-Type':'application/json',
              'Authorization':`JWT ${localStorage.getItem('access')}`
          }
      };
      /* global BigInt */

      const id_contact=contacts[contacts.length-1].pk
      /////////////////////////
      const annonce={
              /********************* */
              'titre':formData.titre,
              'description':formData.description,
              'prix':formData.prix,
              'surface':formData.surface,
              /**************** */
              'categorie_immobilier':formData.categorie,
              'type_immobilier':formData.type,
              'unite_prix':formData.unite_prix,
              /****************** */
              'adresse_bien_immobilier':formData.adresse,
              'wilaya':Number(formData.wilaya) + 1,
              'commune':Number(formData.commune),
              /********************** */
              'contact':id_contact,
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
      console.log(annonce)
      const body = JSON.stringify(annonce);
      try{
           axios.post(`http://127.0.0.1:8000/api/annonces/create/`,body,config).then((res)=>{
            console.log(res.data);
            console.log("ppppppppppkkkk of annoce is "+res.data.pk);
            const id_annonce =res.data.pk
            for(let i=0;i<images_urls.length;i++){
              loadImage(images_urls[i],id_annonce)
            }
           })
      }catch (err){
          console.log("create a new contact fail ")
      }
    }else{
    }
  }
   /////////////////////////////////////////////////////////////
   const onSubmit = e =>{
    e.preventDefault();
    console.log("wellllllllllllllllllllllllllcccccccccccccccomeeeeeeeeeee")
    createAnnonce()
    ///////////creation d'annonce/////////////////////
    ////////////////////////////////////////////////////
  };
  ///////////////////////////////////////////////////////////////
  return (
    <container>
      <div id="div1">
        <article>
          <h2>Déposer annonce</h2>
          <h3>Acceuil&gt;&gt;Déposer annonce</h3>
        </article>
      </div>
      <h4>étape #01</h4>
      <section>
        <form action="" onSubmit={e=>onSubmit(e)}>
          <article id="art1">

            <div id="in01">
              <label for="">Titre de l'annonce :</label>
              <input type="text" placeholder="Entrer le titre..." name="titre" onChange={handleChange}/>
            </div>
            
             <div id="in02">
              <label for="">Catégorie :</label>
              <select name="categorie" id="" onChange={handleChange} value={formData.categorie}>
                  <option name="categorie" value="Vente">Vente</option>
                  <option name="categorie" value="Echange">Echange</option>
                  <option name="categorie" value="Location">Location</option>
                  <option name="categorie" value="Location pour vacance">Location pour vacance</option>
              </select>
             </div>
             </article>

          <label for="" id="textdes">Description de l'annonce :</label>
          
          <br />
          <textarea name="description" id="" cols="30" rows="10" placeholder="text..." onChange={handleChange}></textarea>
          <h4>étape #02</h4>
          
          <article id="art2">
            <div id="in03">
              <label for="">Type de bien :</label>
              <select name="type" id="" onChange={handleChange} value={formData.type} >
                <optgroup>
                  <option name="type" value="Apparetment">Apparetment</option>
                  <option name="type" value="Terrain">Terrain</option>
                  <option name="type" value="Terrain">Terrain Agricole</option>
                  <option name="type" value="Maison">Maison</option>
                  <option name="type" value="Bungalow">Bungalow</option>
                </optgroup>
              </select>
            </div>
            <div id="in04">
              <label>Prix / unité :</label>
              <input name="prix"type="tel" placeholder="0.0" onChange={handleChange} value={formData.prix} />
              <select name="unite_prix" id="" onChange={handleChange} value={formData.unite_prix} >
                <optgroup>
                  <option name="unite_prix" value="Da">Da</option>
                  <option name="unite_prix" value="Million centime">Million centime</option>
                  <option name="unite_prix" value="Milliard centime">Milliard centime</option>
                  <option name="unite_prix" value="DA par m2">DA par m2</option>
                  <option name="unite_prix" value="Million par m2">Million par m2</option>
                </optgroup>
              </select>

            </div>
            <div id="in05">
              <label for="">
                Surface en m<sup>2</sup> :
              </label>
              <input type="tel" placeholder="0.0" name="surface" id="" onChange={handleChange} value={formData.surface} />
            </div>
          </article>
               <article id="art3">
                <div id="in06">
                  <label for="">Wilaya :</label>
                            <select id="wilayaList" onChange={handleChangeWilaya} name='wilaya'>
                             {
                                wilayaList.map((item, index) => {
                                    return(
                                        <option name='wilaya' key={index} value={index}>{item}</option>
                                    )
                                })
                             }
                            </select>
                        </div>
              <div id="in06">
              <label for="">Communne : </label>
                 <select id="communeList" onChange={handleChangeCommune} name="commune">
                            {
                                communeList.map((item, index) => {
                                    return(
                                        <option key={index} name='commune' value={item.pk}>{item.nom}</option>
                                    )
                                })
                            }
                 </select>
              </div>
            <div id="in08">
              <label for="">Adresse Exacte :</label>
              <input type="text" placeholder="Adresse " name="adresse" id="" onChange={handleChange} value={formData.adresse} />
            </div>
          </article>
          <h4>étape #03</h4>
          <label for="" id="gal">Gallerie d'images :</label>
          <article id="art4">
            <label for="fi">
              <i class="fa-solid fa-upload"></i>
              Ajouter une image
               <input type="file" accept="image/*" id="fi" onChange={e => handleImageChange(e)} multiple/>
            </label>
          </article>
           <div id="contact-div">  
            <button className="change">
              Ajouter Annonce
            </button>
           </div>
        </form>
      </section>
    </container>
  );
};
export default connect(null,{loadImage})(Publier);