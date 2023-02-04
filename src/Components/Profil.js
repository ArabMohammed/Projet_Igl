import React, { useState } from "react";
import './Profil.css'
import { connect } from "react-redux";
import { getListWilayasCommunes } from "../actions/localisation";
function Profil(){
    const user=JSON.parse(localStorage.getItem('user'))
    //console.log("welcome user")
    /*console.log(user)*/
    const [formData, setFormData] = useState({
        firstName:user.prenom,
        lastName:user.nom,
        image:'',
        userName:'',
        email:user.email,
        password: '',
        birthDay: '',
        wilaya: '',
        commune: '',
        phoneNumber: '+213 '
    })

    const[value, setValue]= useState(-1)

    //console.log("value du debut" + formData.firstName)

    const wilayaList = []
    const communeList = []

    const wilayas_communes=JSON.parse(localStorage.getItem('wilayas_communes'))
    //console.log("list wilaya communes : "+wilayas_communes)
   
    const wilayas=wilayas_communes["wilayas"]
    const communes = wilayas_communes["communes"]
    //console.log("Les communes sont + ", communes)

    for(let i=0; i<wilayas.length; i++){
        wilayaList.push(wilayas[i].nom)
    }
    /*console.log("wilaya list :")
    console.log(wilayaList)*/


    function handleChange(event){
        setFormData((prevData) => {
            return {...prevData, 
                [event.target.name] : [event.target.value]
            }
        })
        console.log('value de fromdata 1  = ' + formData.phoneNumber)
    }

    /*const handleChange = e => setFormData({
        ...formData, [e.target.name] : [e.target.value]
    })*/

    
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
                                    <label htmlFor="userName">Nom d'utilisateur</label>
                                    <input id="userName"
                                        type="text"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="userName"/>
                                </div>
                            </div>
                        </div>

                        
                        <div className="input-fieled-profil">
                            <label htmlFor="email">Email</label>
                            <input id="email"
                                   type="email" placeholder=""
                                   onChange={handleChange}
                                   name="email"
                                   value={formData.email}/>
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
                                   name="date"
                                   id="date"
                                   value={formData.birthDay}
                                   onChange={handleChange}
                                   ></input>
                        </div>
                        <div className="input-fieled-profil">
                            <label htmlFor="wilayaList">Wilaya</label>
                            <select id="wilayaList" onChange={handleChangeWilaya} name='wilaya'>
                                <option value='' name="wilaya">Wilaya</option>
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
                        <select id="communeList" onChange={handleChangeCommune}>
                            <option name="commune">Commune</option>
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
                               className="button-submit-profil" />
                    </form>
                </div>
            </div>
        </>
    )

}
export default connect() (Profil)