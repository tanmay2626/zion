import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import "./register.scss";

function Register() {

    const [cartValue, setCart] = useState(0);
    const [hovered, setHovered] = useState(false);
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(cartValue);
    }
  return (
    <>
      <Navbar active={"register"} />
      <section className="register">
        <h2>Register</h2>
        <form className="events-container">
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="100"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="200"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="50"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="200"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="200"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="200"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="200"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            src="./images/icon.jpeg"
            title="Event Name"
            date="16 April 2023"
            time="1:30pm onwards"
            location="8th Floor 802"
            prizePool="15k & goodies"
            maxMembers="1"
            price="200"
            cartValue={cartValue}
            setCart={setCart}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <button class="final" type="button" onClick={submitHandler}>Let's Participate {'>>'}</button>
        </form>
      </section>
      <Footer />
      <div className={hovered?"cart-value hovered" : "cart-value"} onMouseEnter={()=>{
        setHovered(true);
      }} onMouseLeave={()=>{
        setHovered(false);
      }}>
        {hovered ? "Proceed to pay >>" : "₹" + cartValue}
        
      </div>
    </>
  );
}

export default Register;
