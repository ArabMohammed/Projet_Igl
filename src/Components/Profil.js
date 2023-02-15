import React, { useState } from "react";
import './Profil.css'
import { connect } from "react-redux";
import { getListWilayasCommunes } from "../actions/localisation";
import { updateProfile } from "../actions/profile";
import {load_user} from '../actions/auth'

function Profil({updateProfile,load_user}){
    const user=JSON.parse(localStorage.getItem('user'))
    const [formData, setFormData] = useState({
        firstName:user.prenom,
        lastName:user.nom,
        image:'',
        userName:'',
        email:user.email,
        password: '',
        birthDay: user.date_naissance,
        wilaya:String(user.wilaya),
        commune:String(user.commune),
        phoneNumber:user.numero_telephone,
    })

    const[value, setValue]= useState(user.wilaya)

    console.log("welcome now")
    console.log(user.wilaya)
    console.log(user.email)
    console.log(user.commune)

    const wilayaList = []
    const communeList = []

    const wilayas_communes=JSON.parse(localStorage.getItem('wilayas_communes'))
   
    const wilayas=wilayas_communes["wilayas"]
    const communes = wilayas_communes["communes"]
    //console.log("Les communes sont + ", communes)

    for(let i=0; i<wilayas.length; i++){
        wilayaList.push(wilayas[i].nom)
    }
    let wilayaActuel="Wilaya" ;
    for(let i=0; i<wilayas.length; i++){
        if(wilayas[i].pk==formData.wilaya){
            wilayaActuel=wilayas[i].nom
        }
    }
    console.log("commune : "+formData.commune)
    let communeActuel="Commune" ;
    for(let i=0; i<communes.length; i++){
        if(communes[i].pk==formData.commune){
            communeActuel=communes[i].nom
        }
    }


    function handleChange(event){
        setFormData((prevData) => {
            return {...prevData, 
                [event.target.name] : [event.target.value]
            }
        })
        console.log('value de fromdata 1  = ' + formData.phoneNumber)
    }

    
    function handleChangeWilaya(event){
        setValue(Number([event.target.value]) + 1)
        let numWilaya = Number([event.target.value]) + 1
        console.log(" la valeur est"+numWilaya)
        setFormData((prevData) => {
            return {...prevData, 
                [event.target.name] : [event.target.value]
            }
        })


        for(let i=0; i<communes.length; i++){

            if(Number(communes[i].wilaya) === numWilaya){
                communeList.push(communes[i].nom)
            }
        }

        for(let i=0; i<communeList.length; i++){

                console.log((communeList[i]))
            
        }

    }

    for(let i=0; i<communes.length; i++){

        if(Number(communes[i].wilaya) === value){
            communeList.push(communes[i])
        }
    }

    function handleChangeCommune(event){
        let numComm = Number([event.target.value]) + 1
        console.log(" la valeur est"+numComm)
        setFormData((prevData) => {
            return {...prevData, 
                [event.target.name] : [event.target.value]
            }
        })
    }

    function update(e){
        e.preventDefault()
        console.log(formData);
        const {firstName,lastName, userName, email, password, birthDay, wilaya, commune, phoneNumber} = formData
        updateProfile(firstName,lastName, email, phoneNumber[0], Number(wilaya[0])+1, Number(commune[0]), birthDay)
        load_user()
    }


    return(
        <>
            <div className="my-profil">
                <div className="top-my-profil">
                        <div className="top-title-my-account">
                            <h1>Mon Compte</h1>
                            <h2>Mon profil</h2>
                        </div>
                </div>
                <div className="perso-info-profil">
                    <div className="title-profil">
                        <h2>Informations Personnelles</h2>
                    </div>
                    {/* form */}
                    <form>
                        <div className="up-form-profil">
                            <div className="input-fieled-profil">
                                <input type="image"
                                    id="image"
                                    alt="Login"
                                    src="/images/user-solid.svg"
                                    className="img-form"
                                     />
                            </div>
                            <div>
                                <div className="input-fieled-profil">
                                    <label htmlFor="firstName">Nom</label>
                                    <input id="firstName"
                                        type="text"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="firstName"
                                        value={formData.lastName}/>
                                </div>
                                <div className="input-fieled-profil">
                                    <label htmlFor="lastName">Prénom</label>
                                    <input id="lastName"
                                        type="text"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="lastName"
                                        value={formData.firstName}/>
                                </div>
                                <div className="input-fieled-profil">
                            <label htmlFor="email">Email</label>
                            <input id="email"
                                   type="email" placeholder=""
                                   onChange={handleChange}
                                   name="email"
                                   value={formData.email}/>
                            </div>
                            </div>
                        </div>

                        
                       
                        <div className="input-fieled-profil">
                            <label htmlFor="password">Mot de passe</label>
                            <input id="password"
                                   type="password"
                                   placeholder=""
                                   onChange={handleChange}
                                   name="password"/>
                        </div>
                        <div className="input-fieled-profil">
                            <label htmlFor="birthDate">Date de naissance</label>
                            <input type="date"
                                   name="birthDay"
                                   id="date"
                                   value={formData.birthDay}
                                   onChange={handleChange}
                                   ></input>
                        </div>
                        <div className="input-fieled-profil">
                            <label htmlFor="wilayaList">Wilaya</label>
                            <select id="wilayaList" onChange={handleChangeWilaya} name='wilaya'>
                                <option value='' name="wilaya">{wilayaActuel}</option>
                            {
                                wilayaList.map((item, index) => {
                                    return(
                                        <option name='wilaya' key={index} value={index}>{item}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className="input-fieled-profil">
                        <label htmlFor="communeList">Commune</label>
                        <select id="communeList" onChange={handleChangeCommune} name="commune">
                            <option name="commune">{communeActuel}</option>
                            {
                                communeList.map((item, index) => {
                                    return(
                                        <option key={index} name='commune' value={item.pk}>{item.nom}</option>
                                    )
                                })
                            }
                        </select>
                        </div>
                        <div className="input-fieled-profil">
                        <label htmlFor="number">Numéro de téléphone</label>
                        <input id="number" 
                               type="text"
                               placeholder=""
                               onChange={handleChange}
                               name="phoneNumber"
                               value={formData.phoneNumber}></input>
                        </div>
                        <input type="submit" 
                               value="Modifier les informations"
                               className="button-submit-profil"
                               onClick={update} />
                    </form>
                </div>
            </div>
        </>
    )

}
export default connect(null,{updateProfile,load_user}) (Profil)
