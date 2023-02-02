import React from "react";
import { Link } from "react-router-dom";
import Myads from "../Components/Myads";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MyAds(){
    return (
        <>
            <Navbar />
            <Myads />
            <Footer />
        </>
        
    )
}

export default MyAds;