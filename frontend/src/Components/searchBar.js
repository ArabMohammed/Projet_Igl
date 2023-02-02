import React from 'react' ;
import './searchBar.css' ;
import data from './data' ;
import { useState } from 'react';


function SearchBar() {

    const [searchTerm , setSearchTerm] = useState ([]) ;

    const handleSearchTerm = (e) =>{
      let valeur = e.target.value ;
      setSearchTerm(valeur) ;
    }

  return (
    <>
        
        <div className='SearchBar'>
            
            <h1>Comment pouvons-nous vous aider ?</h1>
            <input  
                    type='text'
                    id = "searchBar"
                    placeholder='ex:comment publier une annonce ?'
                    name='searchBar'
                    onChange={handleSearchTerm}
            />
        </div>
        <div className='search_result'>
          {
           searchTerm.length !== 0 && (
            data.filter((resultat) => {
              return(
                resultat.toLowerCase().includes(searchTerm.toLowerCase()) 
              )
            }).map((resultat) => {
              return(
                <div className='resultat'>{resultat}</div>
              )
            }
          )
          )}
        </div>
    </>
    
  )
}

export default SearchBar