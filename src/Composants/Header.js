import React from 'react';
import Logo from "../images/Logo.png"
import HeaderGif from '../images/HeaderGif.gif'
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <div className="header">
            <div className="HeaderText">
            <h1>Comment faire    <ReactTypingEffect className="typing"  eraseDelay="1500" text={["........","un website", "un Logo!","trouver un Job"]}/> </h1>
            <img src={Logo} alt="logo" />
            <p>
            tu veux apprendre des choses mais tu sais pas par ou commencer ? 
            tu veux developper des nouvelles donctionalit√© mais tu sais comment ?
            </p>
            </div>
            <img src={HeaderGif} alt="HeaderGif" />
        </div>
    );
}

export default Header;
