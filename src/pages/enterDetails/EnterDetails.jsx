import { Hidden, TextField } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./enterDetails.scss";

function EnterDetails() {
  return (
    <>
      <Navbar active={"register"} />
      <section id="details">
        <h2>Register</h2>
        <div className="details-container">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            // value={userDetails.name}
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            type="email"
            fullWidth
            // value={userDetails.email}
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            type="number"
            fullWidth
            // value={userDetails.number}
          />
          <a href="/register">
            <button className="participate">Participate Now</button>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EnterDetails;
