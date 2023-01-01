import React from "react";
import { Link } from "react-router-dom";
import Myfav from "../Components/Myfav";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MyFav(){
    return(
        <>
            <Navbar />
            <Myfav />
            <Footer />
        </>
    )
}

export default MyFav;