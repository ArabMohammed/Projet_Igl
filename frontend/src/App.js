
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Home from './containers/Home'
import Activate from './containers/Activate';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Google from './containers/Google';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout'
import {Provider} from 'react-redux';
import store from './store'
<<<<<<< HEAD
import About from './pages/About';
import Aide from './pages/Aide';
import GestionCompte from './Components/gestionCompte';
import AdminSection from './Components/admin';
import GestionAds from './Components/gestionAds';
import Securite from './Components/securite';
import SignalerProblem from './Components/signalerProblem';
import ChatApp from './Components/chatApp';


=======
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
function App(){
  return(
  <Provider store={store}>
     <BrowserRouter>
      <Layout>
        <Routes>
          <Route   path="/" element={<Home/>}/>
          <Route   path="/login" element={<Login/>}/>
          <Route   path="/signup" element={<Signup/>}/>
          <Route   path="/reset-password" element={<ResetPassword/>}/>
          <Route   path='/google' element={<Google/>} />
          <Route   path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
          <Route   path="/activate/:uid/:token" element={<Activate/>}/>
<<<<<<< HEAD
	  <Route path='/About' element={<About />} />
	  <Route path='/aide' element={<Aide/>}></Route>
          <Route path='/aide/gestion des comptes' element={<GestionCompte/>} />
          <Route path='/aide/gestion des annonces' element={<GestionAds/>}/>
          <Route path="/aide/contacter l'annonceur" element={<AdDetails/>}/>
          <Route path='/aide/confiance et securite' element={<Securite/>}/>
          <Route path='/aide/problem' element={<SignalerProblem/>}/>
          <Route path='/Compte/Admin' element={<AdminSection/>}/>
          <Route path='/Compte/mes_messages' element={<ChatApp/>}/>
=======
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
  );
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

