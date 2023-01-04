import './App.css';
import {useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import Home from './containers/Home'
import Activate from './containers/Activate';
import Signup from './containers/Signup';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout'
const  App=()=>{
  <BrowserRouter>
     <Routes>
      <Route  path="/" element={Home}/>
      <Route  path="/login" element={Login}/>
      <Route  path="/login1" element={Login}/>
      <Route  path="/signup" element={Login}/>
      <Route  path="/reset-password" element={ResetPassword}/>
      <Route  path="/password/reset/confirm/:uid/:token" element={ResetPasswordConfirm}/>
      <Route  path="/activate/:uid/:token" element={Activate}/>
    </Routes>
  </BrowserRouter>

}
export default App;
/*function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState('')
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()


  useEffect(() =>{
    fetch('http://localhost:8000/api/articles/', {
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'eb2911dd5662ee883fdbe05a43f94dd240440f6d'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))

  }, [])

  const editBtn = (article) =>{
    setEditArticle(article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if(myarticle.id === article.id){
        return article
      }else{
        return myarticle
      }
    })
    setArticles(new_article)
  }

  const articleForm = () =>{
    setEditArticle({title:'', description:''})
  }

  const insertedInformation = (article) => {
   const new_articles = [...articles,article]
   setArticles(new_articles)
  }

  const deleteBtn = (article) =>{
    const new_article = articles.filter(myarticle => {
      if(myarticle.id === article.id){
        return false
      }
      
      return true
    })
    setArticles(new_article)
  }


  useEffect(()=> {
    var user_token = token['mytoken']
    console.log('User token is',user_token)
    if(String(user_token) === 'undefined'){
        navigate('/')
    }else{
      navigate('/articles')
    }
}, [token])


const logoutBtn = () => {
  removeToken(['mytoken'])

}
 


  return (
    <div className="App">

   <NavBar />
   <br />

   <div className="row">
     <div className="col">
       <button className="btn btn-primary" onClick={articleForm}>Create Post</button>

     </div>

   </div>



    <ArticleList articles={articles} editBtn ={editBtn}  deleteBtn ={deleteBtn}/>
    <Form  article = {editArticle} updatedInformation= {updatedInformation} insertedInformation= {insertedInformation}/>
  
    </div>
  );
}
*/

