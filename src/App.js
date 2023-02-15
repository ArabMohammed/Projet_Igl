import React from "react";
import Navbar from "./Components/Navbar";
import "./style.css";
import Home from "./pages/HomeCopy";

import Account from "./pages/Account";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import AccountInfo from "./pages/AccountInfo";
import MyAds from "./pages/MyAds";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Google from "./pages/Google";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Activate from "./pages/Activate";
import Accueil from "./pages/Accueil";
import store from "./store";
import { Provider } from "react-redux";
import AdDet from "./Components/AdDet";
import Layout from "./hocs/Layout";
import Publier from "./Components/Publier";
import Acount from "./Components/Acount";
import Aide from "./my_Part/Pages/Aide";
import GestionCompte from "./my_Part/Component/gestionCompte";
import AdminSection from "./my_Part/Component/admin";
import GestionAds from "./my_Part/Component/gestionAds";
import Securite from "./my_Part/Component/securite";
import SignalerProblem from "./my_Part/Component/signalerProblem";
import ChatApp from "./my_Part/Component/chatApp";
import ErrorPage from "./my_Part/Pages/Errorpage";
import About from "./my_Part/Pages/About";

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
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="/aide/confiance et securite" element={<Securite />} />
            <Route path="/aide/problem" element={<SignalerProblem />} />
            <Route path="/compte/Admin" element={<AdminSection />} />
            <Route path="/compte/mes_messages" element={<ChatApp />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/aide" element={<Aide />} />
            <Route path="/compte" element={<Account />} />
            <Route
              path="/compte/infopersonnelles"
              element={<AccountInfo />}
            ></Route>
            <Route path="/compte/mesannonces" element={<MyAds />}></Route>
            <Route
              path="/compte/mesannonces/annonce/:annonceId"
              element={<AdDet />}
            ></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/google" element={<Google />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/publier" element={<Publier />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
