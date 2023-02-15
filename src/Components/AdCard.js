import React from "react";
import './AdCard.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN_FAIL } from "../actions/types";

function AdCard(props){

    function DeleteAnnonce(e){
        e.preventDefalut()
        return async dispatch =>{
        if(localStorage.getItem('access')){
          console.log("user have an access to research annonce")
          const config ={
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`JWT ${localStorage.getItem('access')}`
              }
          };
          const id_annonce=props.pk
          try{
              const res = await axios.delete(`http://127.0.0.1:8000/api/annonces/delete/${id_annonce}/`,config);
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
    }
    
    const source = `http://127.0.0.1:8000/api/annonces/${props.src}/images/1`;
    return(
        <>
        <div className="box-ad" data-testid="adCard">
            <div className="image-ac">
                <img src={source} alt="immage-immobilier" />
                <div className="info-num-ac">
                    <p>{props.price} {props.unite_prix}</p>
                    <p>{props.surface}</p>
                </div>
            </div>
            <div className="up-info-ac">
                <h1>{props.title}</h1>
                <p><i class="fa-sharp fa-solid fa-location-dot"></i> {props.adress}</p>
            </div>
            <hr />
            <div className="down-info-ac">
                <p></p>
                <p><i class="fa-sharp fa-solid fa-calendar-week"></i>{props.date}</p>
            </div>
        </div>
        </>
    )
}

export default AdCard;