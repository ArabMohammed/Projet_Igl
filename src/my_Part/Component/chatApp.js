import React from "react";
import TopPart from "./topPart";
import "./chatApp.css"
import persImage from "../images/identity.jpg"
import sendIcon from "../images/sendIcon.png"

function ChatApp(props){
    function getMessage(){
        // fonction pour enregistrer le message dans la base de donnes 
    }

    return(
        <>
                <TopPart title ='Mon Compte >> Mes Messages' />
            <div className="chatApp-container">
                <div className="discussions-active-list">
                    <h4>Discussions</h4>
                    <ul className="list-users-actif">
                        <li>
                            <img src={persImage} alt=""></img>
                            <h6>Ben Arib Abderraouf</h6>
                        </li>
                        <li>
                            <img src={persImage} alt=""></img>
                            <h6>Ben Arab Amina</h6>
                        </li>
                        <li>
                            <img src={persImage} alt=""></img>
                            <h6>Warred Malak</h6>
                        </li>
                    </ul>
                </div>
                <div className="chat-part-container">
                    <h4>Messages</h4>
                    
                        <div className="received-msg">
                            <div className="received-msg-inbox">
                                <p>
                                    Bonjour
                                </p>
                            </div>
                        </div>
                        <div className="outgoing-msg">
                            <div className="outgoing-msg-inbox">
                                <p>
                                    Bonjour
                                </p>
                            </div>
                        </div>
                        <div className="received-msg">
                            <div className="received-msg-inbox">
                                <p>
                                    je suis interesse par votre annonce
                                </p>
                            </div>
                        </div>
                        <div className="outgoing-msg">
                            <div className="outgoing-msg-inbox">
                                <p>
                                    soyez les bienvenus
                                </p>
                            </div>
                        </div>
                    
                    
                    <form>
                        <div className="hr"></div>
                        <div className="send-container">
                            <input placeholder="Envoyer un message..." ></input>
                            <button onClick={getMessage}><img src={sendIcon} alt=""></img></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ChatApp ;