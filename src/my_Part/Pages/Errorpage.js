import React from "react";
import TopPart from "../Component/topPart";
import Error from "../Component/error"

function ErrorPage(){
    return(
        <>
            <TopPart title='Erreur'/>
            <Error/>
        </>
    );
}
export default ErrorPage ;