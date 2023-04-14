import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import "./register.scss";
import eventDetails from "../../data/eventDetails.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const [cartValue, setCart] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [eventsSelected, setEventsSelected] = useState([]);
  const navigate = useNavigate();
  // const [qrOpened, setQrOpened] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(eventsSelected);
    if (cartValue) {
      localStorage.setItem("eventsSelected", JSON.stringify(eventsSelected));
      localStorage.setItem("cartValue", cartValue);
      window.location.href = "/payment";
    } else {
      alert("No events selected");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/details");
    }
  }, [navigate]);
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
              minMembers={event.minMembers}
              maxMembers={event.maxMembers}
              desc={event.desc}
              price={event.price}
              cartValue={cartValue}
              setCart={setCart}
              setEventsSelected={setEventsSelected}
              groupOrPerson={event.groupOrPerson}
              // add any additional props needed here
            />
          ))}
          <button className="final" type="button" onClick={submitHandler}>
            Let's Participate {">>"}
          </button>
        </form>
      </section>
      <Footer />
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
        {cartValue}
      </div>
    </>
  );
}

export default Register;
