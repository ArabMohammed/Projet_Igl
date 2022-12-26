import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
function Home({user}){
    let last_name="";
    let first_name ="";
    console.log("welcome in home page")
    console.log(user)
    if(user!==null){
     first_name=user.prenom
     last_name=user.nom
    }
    return(
    <div className="container">
        <div class="jumbotron mt-5">
            <h1>welcome {first_name} {last_name}</h1>
            <hi class="display-4">Hello,World</hi>
            <p class="lead">This is a simple here unit,a simple jumbotron-style component for calling extra attention</p>
            <hr class="my-4"/>
            <p>Click the Log button</p>
            <Link class="btn btn-primary btn-lg" to="/login" role="button">Login</Link>
        </div>
        <h1>Home</h1>
    </div>
    )
}
const mapStateToProps = state =>({
    user : state.auth.user
});
export default connect(mapStateToProps,null)(Home);