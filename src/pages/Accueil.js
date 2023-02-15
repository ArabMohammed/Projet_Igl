import "./CssFile/home.css";
import AdCard from "../Components/AdCard";
import { connect } from "react-redux";
import { uploadScrapedAnnonces } from "../actions/annonces";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import DateObject from "react-date-object";
import { LOGIN_FAIL } from "../actions/types";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Accueil({ user, uploadScrapedAnnonces }) {
  let last_name = "";
  let first_name = "";
  /************************************************ */

  const [contacts, setContacts] = useState({})

  const wilayaList = [];
  const communeList = [];

  const wilayas_communes = JSON.parse(localStorage.getItem("wilayas_communes"));
  console.log("list wilaya communes : " + wilayas_communes);

  const wilayas = wilayas_communes["wilayas"];
  const communes = wilayas_communes["communes"];
  //console.log("Les communes sont + ", communes)

  for (let i = 0; i < wilayas.length; i++) {
    wilayaList.push(wilayas[i].nom);
  }
  
  const [formData, setFormData] = useState({
    type: "Appartement",
    categorie: "Vente",
    DateDebut: "",
    DateFin: "",
    wilaya: "",
    commune: "",
    champ_recherche: "",
  });
  /***************************************************************************************************8888*/

  const [ads, setAds] = useState([])
  const [listAnnoncesTrouve, setListAnnoncesTrouve] = useState([]);
  function rechercheAnnonce() {
    return async (dispatch) => {
      if (localStorage.getItem("access")) {
        console.log("user have an access to research annonce");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        };
        const date_debut = new DateObject(formData.DateDebut[0]);
        const date_fin = new DateObject(formData.DateFin[0]);
        console.log(date_debut.format("YYYY-MM-DD"));
        console.log(date_fin.format("YYYY-MM-DD"));
        let value="" ;
        if(Number(formData.wilaya)=="0"){
          value=""
        }else{
         value = Number(formData.wilaya) + 1;
        }
        console.log("wilaya :"+value)
        const params = new URLSearchParams([
          ["type", formData.type],
          ["categorie", formData.categorie],
          ["date_debut", date_debut.format("YYYY-MM-DD")],
          ["date_fin", date_fin.format("YYYY-MM-DD")],
          ["wilaya", value],
          ["commune", formData.commune],
          ["search_query", formData.champ_recherche],
        ]);
        try {
          axios.get(`http://127.0.0.1:8000/api/annonces/research/`,{ params },config).then(((res)=>{
            console.log("les resultats sont : "+res.data);
            setAds(res.data)
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            console.log(ads)
          }))
        }catch(err) {
          console.log("create a new contact fail ");
        }
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    };
  }
  /****************************************************************************************************** */

  function handleChange(event) {
    // console.log(event.target.value)
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: [event.target.value] };
    });
  }

  const [value, setValue] = useState(0);
  function handleChangeWilaya(event) {
    setValue(Number([event.target.value]) + 1);
    let numWilaya = Number([event.target.value]) + 1;
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: [event.target.value] };
    });
    //console.log(communes)

    for (let i = 0; i < communes.length; i++) {
      if (Number(communes[i].wilaya) === numWilaya) {
        communeList.push(communes[i]);
      }
    }
  }
  for (let i = 0; i < communes.length; i++) {
    if (Number(communes[i].wilaya) === value) {
      communeList.push(communes[i]);
    }
  }
  function handleChangeCommune(event) {
    let numComm = Number([event.target.value]) + 1;
    //console.log(" la valeur est" + numComm);
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: [event.target.value] };
    });
  }
  /*********************************************** */
  if (user !== null) {
    console.log(user);
    first_name = user.prenom;
    last_name = user.nom;
  } else {
    console.log("user is null");
  }
  console.log("les annonces avant affichage : "+ads)
  return (
    <container>

      <section id="section01">
      <Navbar />

        <p id="p1">
          <h1>
            welcome {first_name} {last_name}
          </h1>
          <span>Meilleur</span> Affaire <span>Immobiliére</span>
        </p>
        <p id="p2">
          le portail des annonces immobilières en Algérie EstateX.com propose de
        </p>
        <p id="p3">multiple annonces de biens immobilières publiés</p>
        <form action="">
          <input
            type="search"
            placeholder="Rechercher..."
            id="seo"
            name="champ_recherche"
            onChange={handleChange}
            value={formData.champ_recherche}
          />
          <label for="#seo" id="l1">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ marginRight: "10px" }}
            ></i>
            Rechercher
          </label>
        </form>
      </section>
      <section id="section02">
        <form action="">
          <table>
            <tr>
              <td>
                <label for="" className="labels">
                  Categorie :
                </label>
                <br />
                <select
                  name="categorie"
                  className="selected"
                  onChange={handleChange}
                  value={formData.categorie}
                >
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
              <td>
                <label for="" className="labels">
                  Type :
                </label>
                <br />
                <select
                  name="type"
                  className="selected"
                  onChange={handleChange}
                  value={formData.type}
                >
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
                  Date Début :
                </label>
                <br />
                <input
                  type="date"
                  name="DateDebut"
                  onChange={handleChange}
                  value={formData.DateDebut}
                />
              </td>
              <td>
                <label for="" className="labels">
                  Date Fin :
                </label>
                <br />
                <input
                  type="date"
                  name="DateFin"
                  onChange={handleChange}
                  value={formData.DateFin}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="" className="labels">
                  Wilaya :
                </label>
                <br />
                <select
                  id="wilayaList"
                  onChange={handleChangeWilaya}
                  name="wilaya"
                >
                  <option value="" name="wilaya">
                    Wilaya
                  </option>
                  {wilayaList.map((item, index) => {
                    return (
                      <option name="wilaya" key={index} value={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <label for="" className="labels">
                  Commune :
                </label>
                <br />
                <select
                  id="communeList"
                  onChange={handleChangeCommune}
                  name="commune"
                  className="selected"
                >
                  <option name="commune">Commune</option>
                  {communeList.map((item, index) => {
                    return (
                      <option key={index} name="commune" value={item.pk}>
                        {item.nom}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td colspan="2" id="td_last">
                {/* <input type="submit" value="Lancer la recherche" id="subm" /> */}
                <button type="button" onClick={rechercheAnnonce()} id="subm" >
                  Lancer la recherche
                </button>
              </td>
            </tr>
          </table>
        </form>
      </section>
      <div id="searchResult">
      <div className="list-ads-my-account">
                        {
                               ads.map((item) => {
                                let source =  `/compte/mesannonces/annonce/${item.pk}`
                                console.log(item.contact)

                                return(
                                    <Link to={source} state={{ads}}>
                                            <AdCard 
                                             key={item.pk}
                                             title={item.titre}
                                             price={item.prix}
                                             unite_prix={item.unite_prix}
                                             surface={item.surface}
                                             adress={item.adresse_bien_immobilier}
                                             date={item.date_publication}
                                             isNegotiable={false}
                                             src={item.pk}
                                             isDeleted={false}
                                             //utilisateurNom={contacts.nom}
                                        />
                                     </Link>
                                )
                               })
                            }
                        </div>
        <br></br>
      </div>

      <Footer />

    </container>
    
  );

}
const mapState = (state) => ({
  user: state.auth.user,
});
export default connect(mapState, { uploadScrapedAnnonces })(Accueil);