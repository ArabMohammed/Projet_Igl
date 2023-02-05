import React from 'react';
import ElementCard from './elementCard';
import ElementList from './elementList';
import './elementCard.css' ;


/* */

function Help (){
    return(
        <>
            <div className='row'>
                {
                    ElementList.map((elem) => {
                        return(
                                <ElementCard 
                                title = {elem.titre}
                                lien = {elem.lien}
                                src = {elem.image}
                                description = {elem.description}
                                />
                        ) 
                    }) 
                }
            </div>
        </>
    ) 
}
export default Help ;