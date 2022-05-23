import React,{useState, useEffect} from 'react';
import Logo from '../images/Logo.png'
import Header from './Header'
import Search from "./Search"
const Home = () => {

    const NavChangeOnScroll = () => {
        document.addEventListener("scroll", () => {
            let nav = document.getElementById("nav")
            nav.classList.add("navScroll")
            if(window.pageYOffset == 0){
                nav.classList.remove("navScroll")
            }
        })
       

    }


    useEffect(() => {
        setTimeout( NavChangeOnScroll(),2000)
    },[])

    return (
        <div>
            <nav id="nav">
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
            <Search/>
           <main>
            <div className="Tags"></div> 
           </main>
        </div>
    );
}

export default Home;
