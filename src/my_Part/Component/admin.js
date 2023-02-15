import React from "react";
import TopPart from "./topPart";
import IdentityImg from "../images/identity.jpg";
import "./admin.css";
import persIcon from "../images/persIcon.png";
import MsgIcon from "../images/AdsIcon.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
function AdminSection({ user }) {
    const [formData, setFormData] = useState({
        type: "Appartement",
        categorie: "Vente",
        site_url:"",
      });  
    function handleChange(event) {
        // console.log(event.target.value)
     setFormData((prevData) => {
     return { ...prevData, [event.target.name]: event.target.value };
    });
    }
  /****************Effecturer le webscraping ***************************** */
  function uploadScrapedAnnonces(){
    return async (dispatch) => {
    if(localStorage.getItem('access')){
    console.log("user have an access to research annonce")
    const config ={
        headers:{
            'Content-Type':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`
        }
    };
    const params = new URLSearchParams([
      ['type',formData.type],
      ['categorie',formData.categorie],
      ['site_annonces',formData.site_url],
    ]);
    console.log("les attributs de recherche sont :"+params)
    try{
        axios.get(`http://127.0.0.1:8000/api/annonces/uploadscrapedannonces/`,{params},config).then((res)=>{
            console.log(res.data)
        });
    }catch (err){
        console.log("create a new contact fail ")
    }
  }else{
    
  }
 }
};
  /********************************************** */
  const [infoAdministrateur, setinfoAdministrateur] = useState({});
  function getAdminData() {
    console.log("welcome in envoyer message");
    if (localStorage.getItem("access")) {
      console.log("user have an access");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      };
      try {
        axios
          .get(
            `http://127.0.0.1:8000//api/messages/infosadministrateur/`,
            config
          )
          .then((res) => {
            console.log(res.data);
            setinfoAdministrateur(res.data);
          });
      } catch (err) {
        console.log("create a new contact fail ");
      }
    } else {
    }
  }
  useEffect(() => getAdminData(), []);
  /****************************************** */
  return (
    <>
      <TopPart title="Compte Administrateur" />
      <div className="Admin-section-container">
        <div className="info-admin-container">
          <div className="stat-container">
            <ul className="stat-list">
              <li>
                <img src={persIcon} alt=""></img>
                <h5> {infoAdministrateur.Nb_utilisateurs} Utilisateurs</h5>
              </li>
              <li>
                <img src={MsgIcon} alt=""></img>
                <h5>{infoAdministrateur.Nb_annonces} Annonces</h5>
              </li>
            </ul>
          </div>
          <div className="btn-admin-container">
            <form>
              <input  name="site_url"  onChange={handleChange} placeholder="Veuillez entrer le nom du site a scraper" type="text"></input>
              <td>
                <label for="" className="labels">
                  Type :
                </label>
                  <select
                   name="type"
                   className="selected"
                   onChange={handleChange}
                   value={formData.type}
                  >
                  <option name="type" value="">
                    Tous
                  </option>
                  <option name="type" value="Appartement">
                    Apparetment
                  </option>
                  <option name="type" value="Terrain">
                    Terrain
                  </option>
                  <option name="type" value="Terrain Agricole">
                    Terrain Agricole
                  </option>
                  <option name="type" value="Maison">
                    Maison
                  </option>
                  <option name="type" value="Bungalow">
                    Bungalow
                  </option>
                </select>
              </td>
              <td>
                <label for="" className="labels">
                  Categorie :
                </label>
                <select name="categorie" className="selected" onChange={handleChange} value={formData.categorie}>
                  <option name="categorie" value="">
                    Tous
                  </option>
                  <option name="categorie" value="Location">
                    Location
                  </option>
                  <option name="categorie" value="Location pour vacance">
                    Location pour vacances
                  </option>
                  <option name="categorie" value="Echange">
                    Echange
                  </option>
                  <option name="categorie" value="Vente">
                    Vente
                  </option>
                </select>
              </td>
                <button className="btn-web-scraping" type="button" onClick={uploadScrapedAnnonces()}>
                  Récupérer les Annonces du site
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(AdminSection);
