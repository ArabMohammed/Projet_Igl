/*
import React from 'react'
export default function Login(){
    const [formData,setFormData]=React.useState(
        {email:"",password:"",passwordConfirm:"",joinedNewsletter:false}
    )
    function handleChange(event){
        const {name,value,type,checked}=event.target
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
          event.preventDefault()
          if(formData.password === formData.passwordConfirm){
            console.log("successfully signed up")
          }
    }
    return(
        <div className='my-form'>
           <form className='form' onSubmit={handleSubmit}>
            <input type="email"
                  placeholder="Email address"
                  className='form--input'
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
            />
            <br/>
            <input type="password"
                  placeholder="Password"
                  className='form--input'
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
            />
            <br/>
            <input type="password"
                  placeholder="Confirm password"
                  className='form--input'
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={formData.passwordConfirm}
            />
            <div className='form--marketing'>
            <input
                type="checkbox"
                id="okayToEmail"
                onChange={handleChange}
                name="joinedNewsletter"
                checked={formData.joinedNewsletter}
                />
                <label htmlFor='okayToEmail'>I want to join the newsletter</label>
            </div>
            <div>
                <button>Sign up</button>
            </div>
           </form>
        </div>
    )
}*/