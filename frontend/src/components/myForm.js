import React from 'react'
export default function Form(){
    const [formData,setFormData]=React.useState(
        {firstName:"",lastName:"",email:"",comments:"",isFriendly:true,favColor:"red"}
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
          window.prompt("you have submitted your information")
    }
    return(
        <form className='my-form' onSubmit={handleSubmit}>
            <div>
            <input type="text" 
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
            </div>
            <div>
            <input type="text" 
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />
            </div>
            <div>
             <input type="Email" 
              placeholder="Your email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            </div>
            <div>
            <textarea
             value={formData.comments}
             name="comments"
             onChange={handleChange}
            />
            </div>
            <div>
                <input
                type="checkbox"
                id="isFriendly"
                onChange={handleChange}
                name="isFriendly"
                />
                <label htmlFor='isFriendly'>Are You friendly ?</label>
            </div>
            <div>
                <fieldset>
                    <legend>Current employement status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor='unemployed'>Unemployed</label>
                    <br/>
                    <input
                         type="radio"
                         id="part-time"
                         name="employment"
                         value="part-time"
                         checked={formData.employment === "part-time"}
                         onChange={handleChange}
                    />
                    <label htmlFor='part-time'>Part-time</label>
                    <br/>
                    <input
                         type="radio"
                         id="full-time"
                         name="employment"
                         value="full-time"
                         checked={formData.employment === "full-time"}
                         onChange={handleChange}
                    />
                    <label htmlFor='full-time'>Full-time</label>
                   </fieldset>
                </div>
                <div>
                    <select 
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleChange}
                        name="favColor">
                           <option value="red">Red</option>
                           <option value="orange">Orange</option>
                           <option value="yellow">Yellow</option>
                           <option value="green">Green</option>
                           <option value="blue">Blue</option>
                           <option value="indigo">Indigo</option>
                           <option value="violet">Violet</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
        </form>
    )
}