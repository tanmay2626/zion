import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./enterDetails.scss";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EnterDetails(props) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [otherCollegeName, setOtherCollegeName] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleCollege = (event) => {
    setCollegeName(event.target.value);
  };

  const handleChangeCollege = (event) => {
    setOtherCollegeName(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    const inputMobileNumber = event.target.value;
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (mobileNumberRegex.test(inputMobileNumber)) {
      setMobileNumber(inputMobileNumber);
      setMobileNumberError(false);
    } else {
      setMobileNumberError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      college: collegeName === "Other" ? otherCollegeName : collegeName,
      mobile: mobileNumber,
      name: name,
    };
    localStorage.setItem("details", JSON.stringify(data));

    axios
      .post(process.env.REACT_APP_REGISTER_URL, {
        name,
        username,
        email,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          navigate("/register");
        }
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <Navbar active={"register"} />
      <section id="details">
        <h2>Register</h2>
        <div className="details-container">
          <GoogleAuth setEmail={setEmail} />
          {token && (
            <form onSubmit={handleSubmit} className="details-box">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                name="name"
                onChange={handleChangeName}
                required
                // value={userDetails.name}
              />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                type="text"
                name="username"
                value={username}
                fullWidth
                onChange={handleChangeUsername}
                required
                // value={userDetails.email}
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                type="text"
                name="mobile"
                error={mobileNumberError}
                required
                fullWidth
                onChange={handleMobileNumberChange}
                // value={userDetails.number}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">College</InputLabel>
                <Select
                  sx={{ width: 100 + "%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="College"
                  value={collegeName}
                  onChange={handleCollege}
                >
                  <MenuItem
                    value={"Dr. D. Y. Patil Institute of Technology, Pimpri"}
                  >
                    Dr. D. Y. Patil Institute of Technology, Pimpri
                  </MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
              {collegeName === "Other" ? (
                <TextField
                  id="outlined-basic"
                  label="College Name"
                  variant="outlined"
                  name="College Name"
                  fullWidth
                  value={otherCollegeName}
                  onChange={handleChangeCollege}
                  required
                  // value={userDetails.number}
                />
              ) : null}
              {error && <p>{error}</p>}
              {(!name ||
                !username ||
                !collegeName ||
                !mobileNumber ||
                !email) && <p>Please fill all required fields</p>}
              <button
                disabled={
                  !name || !username || !collegeName || !mobileNumber || !email
                }
                className="participate"
                type="submit"
              >
                Participate Now
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EnterDetails;
