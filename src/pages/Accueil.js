import "./CssFile/home.css";
import AdCard from "../Components/AdCard";
import { connect } from "react-redux";
import {uploadScrapedAnnonces} from '../actions/annonces'
import Navbar from "../Components/Navbar";
function Accueil ({user ,uploadScrapedAnnonces}){
  let last_name="";
    let first_name ="";
    if(user!==null){
     console.log(user)
     first_name=user.prenom
     last_name=user.nom
    }
    else{
      console.log("user is null")
    }
    return (
      
    <container>

      <section id="section01">
        <p id="p1">
          <h1>welcome {first_name} {last_name}</h1>
          <span>Meilleur</span> Affaire <span>Immobiliére</span>
        </p>
        <p id="p2">
          le portail des annonces immobilières en Algérie EstateX.com propose de
        </p>
        <p id="p3">multiple annonces de biens immobilières publiés</p>
        <form action="">
          <input type="search" placeholder="Rechercher..." id="seo" />
          <label for="#seo" id="l1">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ marginRight: "10px" }}
            ></i>
            Rechercher
          </label>
        </form>
      </section>
      <section id="section02">
        <form action="">
          <table>
            <tr>
              <td>
                <label for="" className="labels">
                  Transaction :
                </label>
                <br />
                <select name="" className="selected">
                  <optgroup>
                    <option value="">Location</option>
                    <option value="">Location pour vacances</option>
                    <option value="">Echange</option>
                    <option value="">Vente</option>
                  </optgroup>
                </select>
              </td>
              <td>
                <label for="" className="labels">
                  Type :
                </label>
                <br />
                <select name="" className="selected">
                  <optgroup>
                    <option value="">Apparetment</option>
                    <option value="">Terrain</option>
                    <option value="">Terrain Agricole</option>
                    <option value="">Maison</option>
                    <option value="">Bungalow</option>
                  </optgroup>
                </select>
              </td>
              <td>
                <label for="" className="labels">
                  Date Début :
                </label>
                <br />
                <input type="date" />
              </td>
              <td>
                <label for="" className="labels">
                  Date Fin :
                </label>
                <br />
                <input type="date" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="" className="labels">
                  Wilaya :
                </label>
                <br />
                <select name="" className="selected">
                  <optgroup>
                    <option value="">Adrar</option>
                    <option value="">Chlef</option>
                    <option value="">Laghouat</option>
                    <option value="">Oum el bouaghi</option>
                  </optgroup>
                </select>
              </td>
              <td>
                <label for="" className="labels">
                  Commune :
                </label>
                <br />
                <select name="" className="selected">
                  <optgroup>
                    <option value="">Harrach</option>
                    <option value="">oued smar</option>
                    <option value="">bab ezouar</option>
                    <option value="">alger</option>
                  </optgroup>
                </select>
              </td>
              <td colspan="2" id="td_last">
                <input type="submit" value="Lancer la recherche" id="subm" />
              </td>
            </tr>
          </table>
        </form>
      </section>
      <div id="searchResult">
      <AdCard   key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1} />
      <AdCard key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1}/>
      <AdCard key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1}/>
      <AdCard key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1}/>
      <AdCard key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1}/>
      <AdCard key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1}/>
      <AdCard key={"item.pk"}
                                        title={"abcd"}
                                        price={1000}
                                        surface={2000}
                                        adress={8768768768}
                                        date={7687}
                                        isNegotiable={false}
                                        src={1}/>
      <br></br>
      
      </div>
      <button id="plus" >Voir Plus</button>
      <footer>
        <div id="f1">
          DzEstates <br />
          L'immobilier en Algérie
        </div>
        <div id="f2">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <p>Qui sommes-nous ?</p>
          <hr />
          <p>DzEstates.com &copy; 2022 | tout droits réservés</p>
        </div>
        <div id="f3">
          Nous contacter <br />
          DzEstates@gmail.com
        </div>
      </footer>
    </container>
  )
}
const mapState = state => ({
  user: state.auth.user
})
export default connect(mapState ,{uploadScrapedAnnonces}) (Accueil)