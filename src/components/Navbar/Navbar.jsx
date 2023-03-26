import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

function Navbar(){
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    window.onscroll = ()=>{
        setIsAtTop(window.pageYOffset==0 ? true : false);
    }
    return(
        <>
        <nav className={isAtTop?"Navbar" : "Navbar notTop"}>
            <div className="left">
                <img src="images/ZION.png" alt="zion-logo"/>
            </div>
            <div className="right">
                <a href="#events">Events</a>           
                <a href="#workshops">Workshops</a>                    
                <a href="#contact">Contact</a>           
                <a href="#team">Team</a>           
            </div>
            <div className="hamburger-icon" onClick={()=>{
                setIsCollapsed((prevValue)=>{
                    console.log(prevValue);
                    return !prevValue;
                })
            }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={isCollapsed?"hamburger-slider" : "hamburger-slider show"}>
            <a href="#events">Events</a>           
                <a href="#workshops">Workshops</a>                     
                <a href="#contact">Contact</a>           
                <a href="#team">Team</a>
            </div>
        </nav>
        {/* <div className="dummy-div"></div> */}
        </>
    )
}

export default Navbar;