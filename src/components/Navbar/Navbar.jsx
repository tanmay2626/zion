import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

function Navbar({ active }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  window.onscroll = () => {
    setIsAtTop(window.pageYOffset == 0 ? true : false);
  };
  const navigate = useNavigate();
  function navigateToHome(){
    navigate('/#');
  }
  return (
    <>
      <nav className={isAtTop ? "Navbar" : "Navbar notTop"}>
        <div className="left">
            <img src="images/ZION.png" alt="zion-logo" onClick={navigateToHome}/>
        </div>
        <Link to={"/details"} className={"register mobile"}>
          Register
        </Link>
        <div className="right">
          <Link to={"/details"} className={active == "register" ? "active register" : "register"}>
            Register
          </Link>
          <Link to={"/events"} className={active == "events" ? "active" : null}>
            Events
          </Link>
          <Link
            to={"/contact"}
            className={active == "contact" ? "active" : null}
          >
            Contact
          </Link>
          <Link to={"/team"} className={active == "team" ? "active" : null}>
            Team
          </Link>
        </div>
        <div
          className="hamburger-icon"
          onClick={() => {
            setIsCollapsed((prevValue) => {
              console.log(prevValue);
              return !prevValue;
            });
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div
          className={isCollapsed ? "hamburger-slider" : "hamburger-slider show"}
        >
          <Link to={"/events"} className={active == "events" ? "active" : null}>
            Events
          </Link>
          <Link
            to={"/contact"}
            className={active == "contact" ? "active" : null}
          >
            Contact
          </Link>
          <Link to={"/team"} className={active == "team" ? "active" : null}>
            Team
          </Link>
        </div>
      </nav>
      {/* <div className="dummy-div"></div> */}
    </>
  );
}

export default Navbar;
