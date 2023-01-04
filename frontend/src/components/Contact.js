import React from 'react'
export default function Contact (props){
    return(
       <div className='contact-card'>
          <img  src={`../images/${props.img_name}`} alt={props.description} />
          <h3>{props.name}</h3>
          <div className='info-group'>
              <p>{props.phoneNumber}</p>
          </div>
          <div>
            <p>{props.email}</p>
          </div>
       </div> 
    )
}