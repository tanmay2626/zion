import { Hidden, TextField } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./enterDetails.scss";

function EnterDetails(props) {
  const HandleInput = (e) => {
    const { value, name } = e.target;

    props.setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

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
            onChange={HandleInput}
            name="name"
            // value={userDetails.name}
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            type="number"
            fullWidth
            onChange={HandleInput}
            name="mobile"
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
