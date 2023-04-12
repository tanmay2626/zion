import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import "./register.scss";
import eventDetails from "../../data/eventDetails.json";

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
          {eventDetails.eventDetails.map((event, index) => (
            <RegisterCard
              key={event.eventid}
              eventid={event.eventid}
              src={event.src}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              prizePool={event.prizePool}
              maxMembers={event.maxMembers}
              desc={event.desc}
              price={event.price}
              cartValue={cartValue}
              setCart={setCart}
              setEventsSelected={setEventsSelected}
              // add any additional props needed here
            />
          ))}
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
