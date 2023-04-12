import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import "./register.scss";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

function Register(props) {
  const [cartValue, setCart] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [eventsSelected, setEventsSelected] = useState([]);
  const [qrOpened, setQrOpened] = useState(false);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);

  const [college, setCollege] = useState("");

  const handleChange = (event) => {
    setCollege(event.target.value);
  };

  const HandleInput = (event) => {
    setUsername(event.target);
  };

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
        <form>
          <div className="qr-container">
            <div className="details-container">
              <GoogleAuth email={email} setEmail={setEmail} />
              <div className="select-college">
                <InputLabel id="demo-simple-select-label">College</InputLabel>
                <Select
                  sx={{ width: 100 + "%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={college}
                  label="College"
                  onChange={handleChange}
                >
                  <MenuItem
                    value={"Dr. D. Y. Patil Institute of Technology, Pimpri"}
                  >
                    Dr. D. Y. Patil Institute of Technology, Pimpri
                  </MenuItem>
                </Select>
                <InputLabel id="demo-simple-select-label">Username</InputLabel>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  onChange={HandleInput}
                  name="name"
                  // value={userDetails.name}
                />
              </div>
            </div>
          </div>
        </form>
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
