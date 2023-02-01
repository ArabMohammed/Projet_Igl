import React , {useState,Fragment} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { loadImages,getImagesNumberAnnonce } from '../actions/annonces.js';
import {updateProfileImage ,updateprofile} from '../actions/profile'

function Home({user,loadImages,getImagesNumberAnnonce,updateProfileImage,updateprofile}){
    let last_name="";
    let first_name ="";
    if(user!==null){
     first_name=user.prenom
     last_name=user.nom
    }
    /******************** */
    /********************* */
    const [formData,setFormData]=useState({
        images_urls :[],
    })
    const {images_urls}=formData;
    /************** */
    const [formshowImages,setIsshown]=useState({
        isshown :false,
    })
    const {isshown}=formshowImages
    /************************* */
    const handleImageChange = (e) => {
        
        //var name =document.getElementById('images')
        console.log("collected files")
        //console.log(name.files)
        let newData = { ...formData };
        newData["images_urls"]=e.target.files
        setFormData(newData);
    };
    /************************** */
    const onSubmit = e =>{
        e.preventDefault();
        let comp;
        let id_annonce=1;
        console.log(images_urls[0])
        updateProfileImage(images_urls[0]);  
    };
    const getannonceimages =e=>{
      console.log("get images")
      const annonce_id=1;
      getImagesNumberAnnonce(annonce_id).then(value => {
        console.log("number of images of annoce :")
        console.log(value)
        let newData = { ...formshowImages };
        newData["isshown"]=true
        setIsshown(newData);
    });
    }
    /***************************** */
    let showImages=()=>{
        <div><h1>empty</h1></div>
    }
    if(isshown===true){
     showImages = () => (
        <Fragment>
            <img src="http://127.0.0.1:8000/accounts/2/profileimage" alt="we wait thank you" />
        </Fragment>
    );
    }
    /***************************** */
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
        <div class="jumbotron mt-5">
          <h1>Get request images</h1>
           <button onClick={getannonceimages}></button>
           {isshown ? showImages() : <Fragment><h1>getimages</h1></Fragment>}
        </div>
        <div class="jumbotron mt-5">
        <form onSubmit={e=>onSubmit(e)}>
           <h1>Images</h1>
           <h2>Upload Images</h2>
           <input type="file" accept="image/*"  onChange={e => handleImageChange(e)} multiple/>
           <button type="submit">submit images</button>
        </form>
           <h2>Imge List</h2>
           <ul id="imageList"></ul>
        </div>
        <h1>Home</h1>
    </div>
    )
}
const mapStateToProps = state =>({
    user : state.auth.user
});
export default connect(mapStateToProps,{loadImages,getImagesNumberAnnonce,updateProfileImage})(Home);