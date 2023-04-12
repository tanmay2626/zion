import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import "./register.scss";

function Register() {
  const [cartValue, setCart] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [eventsSelected, setEventsSelected] = useState([]);
  const [qrOpened, setQrOpened] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(eventsSelected);
    setQrOpened((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <Navbar active={"register"} />
      <section className="register">
        <h2>Register</h2>
        <form className="events-container">
          <RegisterCard
            eventid="0"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="1"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="2"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="3"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="4"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="5"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="6"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <RegisterCard
            eventid="7"
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
            setEventsSelected={setEventsSelected}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <button class="final" type="button" onClick={submitHandler}>
            Let's Participate {">>"}
          </button>
        </form>
      </section>
      <Footer />
      <section id="qr-code-popup" className={qrOpened ? "opened" : null}>
        <div className="qr-container">
          <h2>Scan below code to pay</h2>
          <img src={"./images/" + cartValue + ".jpeg"} alt="qr-code" />
          {/* <h4>₹{cartValue}</h4> */}
          <input type="file" id="myFile" name="filename" />
          <input type="submit" className="ss-submit" />
        </div>
      </section>
      <div
        className={hovered ? "cart-value hovered" : "cart-value"}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={submitHandler}
      >
        {hovered ? "Proceed to pay >>" : "₹" + cartValue}
      </div>
    </>
  );
}

export default Register;
