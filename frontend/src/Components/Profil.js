import React, { useState } from "react";
import './Profil.css'

function Profil(){

    const [formData, setFormData] = useState({
        firstname: '',
        lastNAme:'',
        image:'',
        userName:'',
        email: '',
        password: '',
        birthDay: '',
        wilaya: '',
        commune: '',
        phoneNumber: ''
    })

    const wilayaList = ["Tlemcen", "Alger", "Annaba"];
    const communeList = ["Hennaya", "Remchi", "Mansourah"];

    function handleChange(event){
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
                                    className="img-form" />
                            </div>
                            <div>
                                <div className="input-fieled-profil">
                                    <label htmlFor="firstName">Nom</label>
                                    <input id="firstName"
                                        type="text"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="firstName"/>
                                </div>
                                <div className="input-fieled-profil">
                                    <label htmlFor="lastName">Prénom</label>
                                    <input id="lastName"
                                        type="text"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="lastName"/>
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
                                   name="email"/>
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
                                   id="date"></input>
                        </div>
                        <div className="input-fieled-profil">
                            <label htmlFor="wilayaList">Wilaya</label>
                            <select id="wilayaList">
                                <option value="">Wilaya</option>
                            {
                                wilayaList.map((item, index) => {
                                    return(
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className="input-fieled-profil">
                        <label htmlFor="communeList">Commune</label>
                        <select id="communeList">
                            <option value="">Commune</option>
                            {
                                communeList.map((item, index) => {
                                    return(
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        </div>
                        <div className="input-fieled-profil">
                        <label htmlFor="number">Numéro de téléphone</label>
                        <input id="number" 
                               type="number"
                               placeholder=""
                               onChange={handleChange}
                               name="phoneNumber"/>
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

export default Profil;