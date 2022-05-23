import React from 'react';
import Logo from '../images/Logo.png'
import Header from './Header'
const Home = () => {
    return (
        <div>
            <nav>
                <div className="Logo">
                 <img src={Logo} alt="logo" />
                 <h2>Comment faire</h2>
                </div>


                <div className="ListNav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
            <Header/>
        </div>
    );
}

export default Home;
