import React from 'react'
import '../App.css';
import Count from './Count'
export default function State(){
    /*************Increment and decrement state***/
    const [count,setCount] = React.useState(0)
    function add(){
        setCount(prevCount => prevCount+1)
    }
    function subtract(){
        setCount(prevCount => prevCount-1)
    }
    /********************Adding new states to a list of states* */
    const [thingsArray , setThingsArray]=React.useState(["Thing 1","Thing 2"])
    
    function addItem(){
        setThingsArray(prevThingsArray =>{
            return [...prevThingsArray,`Thing ${prevThingsArray.length + 1}`]
        })
    }
    /****************** */
    const thingsElements = thingsArray.map(thing =><p key={thing}>{thing}</p>)
    
    /***************Working with classes in states******************************** */
    const [contact,setContact]=React.useState({
        firstname : "john",
        lastname : "Doe" ,
        phone : "+1 455 556 6",
        email : "sksj@kk.com",
        isFavorite : false
    })
    let starIcon = contact.isFavorite ? "img-path1" : "img-path2"
    function toggleFavorite(){
        setContact(prevContact=>({
            ...prevContact,isFavorite : !prevContact.isFavorite
        }))
    }
    /******************************************** */
    return(
        <div>
         <div className='state'>
             <div className='state-img'>
               <img alt={starIcon} onClick={toggleFavorite}/>
             </div>
            <h2>{contact.firstname} {contact.lastname}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
         </div>
         <br/>
         <div className='state'>
             <Count number={count}/>
             <div>
                <button onClick={add}><h3> + </h3></button>
                <button onClick={subtract}><h3> - </h3></button>
             </div>
         </div>
         <br/>
         <div className='item'>
              <button onClick={addItem}><h4>add Item</h4></button>
              {thingsElements}
         </div>
        </div>

    )
}