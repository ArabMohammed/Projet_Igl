import React from 'react'
import './about.css'
import houseImg from '../images/home.png'

function About (){

    return(
        <>
            <div className='house-container'>
                <div className='welcoming-title-container'>
                    <h5>Bienvenue a notre  <span>DzEstates</span></h5>
                    <p>La meilleure façon de trouver vos propriétés et le service de confiance .</p>
                </div>
                <div className='image-home-container'>
                        <img src={houseImg} alt='' />
                </div>
            </div>
            <div className='description-detaillee'>
                <p className='title-about-container'>Breve description <br></br> de  <span>DzEstates</span></p>
                <p className='contenu'>
                    Le Groupe DzEstates est un portail immobilier en Algerie. créer par un groupe d'étudiants.
                    Notre mission est d'offrir à chacun de nos utilisateurs, une expérience immobilière simple
                    et efficace afin qu'ils concrétisent leurs projets d'achat, de vente ou de location en toute 
                    sérénité.Nous mettons à dispositions des Algeriens le plus large choix d'annonces afin 
                    de leur faciliter la recherche d'un bien selon leurs
                    critères propres, et répondre à toutes les questions soulevées par la réalisation d'un projet
                    immobilier. Notre ambition est de proposer sur notre site une expérience 
                    personnalisée adaptée aux besoins de chacun, afin que chaque vie soit plus simple.
                    Nous sommes de ceux qui pensent que le bonheur se partage et se transmet.
                    Nous sommes convaincus que la proximité est génératrice d'opportunités.
                    L'idée est toute simple, mais elle participe à changer le monde !
                    Depuis la création de DzEstates, nous croyons  qu'avec des solutions pragmatiques, bienveillantes et efficaces, DzEstates
                    s'implique donc au quotidien pour encourager les échanges entre les Algeriens.
                </p>
            </div>
        </>
    ) ;
}

export default About ;