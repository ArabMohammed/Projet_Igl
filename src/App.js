import React from 'react';
import Navbar from './Components/Navbar';
import './style.css';
import Home from './pages/HomeCopy';
import About from './pages/About';
import Account from './pages/Account';
import { Route, Routes ,BrowserRouter  } from 'react-router-dom';
import AccountInfo from './pages/AccountInfo';
import MyAds from './pages/MyAds';
import MyFav from './pages/MyFav';
import AdConsult from './pages/AdConsult';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Google from './pages/Google';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate';
import Accueil   from './pages/Accueil';
import store from './store'
import {Provider} from 'react-redux'
import Layout from './hocs/Layout'


function App() {
  /*const [show , setShow] = useState(false);
  function handleClick(){
    if(!show){
      setShow(() => {
        return (!show);
      })
    }
  }*/
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Layout>
      <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/aide' element={<About />} />
          <Route path='/compte' element={<Account />} />
          <Route path='/compte/infopersonnelles' element={<AccountInfo />}></Route>
          <Route path='/compte/mesfavoris' element={<MyFav />} ></Route>
          <Route path='/compte/mesannonces' element={<MyAds />}></Route>
          <Route path='/compte/mesannonces/annonce' element={<AdConsult />}></Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path='/google' element={<Google />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
          <Route path="/activate/:uid/:token" element={<Activate />}/>
      </Routes>
      </Layout>
        </BrowserRouter>
       
   </Provider>
  );
}

export default App;