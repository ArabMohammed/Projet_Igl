import React from "react";
import "./Myads.css";
import { Link } from "react-router-dom";
import AdCard from "./AdCard";
import { LOGIN_FAIL } from "../actions/types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { confirmAlert } from 'react-confirm-alert';

function Acount({ user }) {
  const [ads, setAds] = useState([]);
  let obj = {};

  let i = 0,
    j = 0;
  const navigate = useNavigate();

  function getUserAnnonces () {
    console.log("welcome in annonces");
    if (localStorage.getItem("access")) {
      console.log("user have an access");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      };
      try {
        console.log("welcome in annonces1");
         axios.get(
          `http://127.0.0.1:8000/api/annonces/mesannonces/`,
          config
        ).then(res=>{
          console.log(res.data);
          setAds(res.data);
          console.log(res);
        })
        } catch (err) {
        console.log("getting annonces of user fail ");
      }
    } else {
      
    }
  };

  useEffect(() => getUserAnnonces(), []);

  const [contacts, setContacts] = useState({});
  const [idcon, setIdcon] = useState(0);

  function getContactId() {
    return async (dispatch) => {
      console.log("marhaba");

      if (localStorage.getItem("access")) {
        console.log("user have an access to research annonce");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        };

        try {
          const res = await axios.get(
            `http://127.0.0.1:8000/api/contacts/${idcon}/`,
            config
          );
          console.log(res.data);
          setContacts(res.data);
          console.log(contacts);
          // con = res.data
          //console.log("les datas de l objet sont : " + con.adresse)
        } catch (err) {
          console.log("create a new contact fail ");
        }
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    };
  }

  //////////////////////////////////////////////////////////////////

  function DeleteAnnonce(e) {
    e.preventDefault()
    if (localStorage.getItem("access")) {
      console.log("user have an access to research annonce");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      };
      if(window.confirm("Vous étes sur que vous voulez supprimer l'annonce ?")){
      const id_annonce=Number(e.target.value)
      try {
          axios.delete(`http://127.0.0.1:8000/api/annonces/delete/${id_annonce}/`,config) .then((res) => {
              console.log(res.data);
              getUserAnnonces();
            });
        } catch (err) {
          console.log("suppressing annonce fails ");
        }
      } else {
        console.log("User does not want to suppress annonce");
      }
    } 
  }
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////

  return (
    <>
      <div className="container-my-account">
        <div className="top-my-account">
          <div className="top-title-my-account">
            <h1>Mon Compte</h1>
            <h2>Mon profil</h2>
          </div>
        </div>
        <div className="center-my-account">
          <div className="photo-my-account">
            <img
              src="/images/user-solid.svg"
              alt="perso-image"
            />
            <p>Bienvenue dans votre espace utilisateur</p>
          </div>
          <div className="switch-my-account">
            <Link to="/compte/infopersonnelles" className="link1">
              <p>
                <i class="fa-sharp fa-solid fa-gear"></i> Modifier mes
                informations personnelles
              </p>
            </Link>
            <Link to="/compte/mes_messages" className="link2">
              <p>
                <i class="fa-solid fa-message"></i> Consulter mes dicussions
              </p>
            </Link>
          </div>
        </div>
        <div className="bottom-my-account">
          <div className="ads-div-my-account">
            <h2>
              <sapn>Mes</sapn> annonces
            </h2>
            <div className="list-ads-my-ads">
              {ads.map((item) => {
                let source = `/compte/mesannonces/annonce/${item.pk}`;
                console.log(item.contact);
                return (
                  <div>
                    <div class="div-button-supprimer">
                      <button className="nego-ac"  value={item.pk} onClick={e=>DeleteAnnonce(e)} >
                        Supprimer
                      </button>
                    </div>
                    <Link to={source} state={{ ads }}>
                      <AdCard
                        key={item.pk}
                        title={item.titre}
                        price={item.prix}
                        unite_prix={item.unite_prix}
                        surface={item.surface}
                        adress={item.adresse_bien_immobilier}
                        date={item.date_publication}
                        src={item.pk}
                        utilisateurNom={user.nom}
                        utilisateurPrenom={user.prenom}
                        isDeleted={true}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapState = (state) => ({
  user: state.auth.user,
});

export default connect(mapState)(Acount);
