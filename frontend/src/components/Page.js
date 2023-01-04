import React from "react"
import logo from "../images/logo192.png"
import '../App.css';
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent";
import Contact from "./Contact";
import State from "./State";
import Form from "./myForm";
import Login from './LoginForm'
import LearnEffects from './LearnEffects'
function Page(){
    return(
    <div>
       <Header/>
       <LearnEffects/>
       <Login/>
       <Form/>
       <MainContent/>
       <State/>
       <Footer/>
       <div>
           <Contact
           name="bobo1"
           img_name="logo192.png"
           description="image of cat 1"
           phone="123 456 789"
           email="kl_binko@esi.dz"
           />
            <Contact
           name="bobo2"
           description="image of cat 2"
           phone="123 456 789"
           email="kl_binko@esi.dz"
           />
            <Contact
           name="bobo3"
           description="image of cat 3"
           phone="123 456 789"
           email="kl_binko@esi.dz"
           />
       </div>
    </div>
    )
}
export default Page