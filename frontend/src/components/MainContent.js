import React from "react"
import logo from "../images/logo192.png"
import '../App.css';
export default function MainContent(){
  const firstname="Arab"
  const lastname="mohammed"
  const hours = new Date().getHours
  let timeOfDay
  if(hours < 12){
     timeOfDay="morning"
  }else if (hours >= 12 && hours <13){
    timeOfDay="afternoon"
  } else {
    timeOfDay = "night"
  }
  return(
    <div>
       <h1>Reasons to learn react</h1>
       <h2>hello  {firstname} {lastname} good {timeOfDay}  </h2>
       <ol> 
         <li>It is a popular library React</li>
         <li>React gives me a better chance to become a web developer</li>
       </ol> 
    </div>
    )
}