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
  //const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [otherCollegeName, setOtherCollegeName] = useState("");
  const [details, setDetails] = useState({
    name: "",
    mobile: 0,
  });
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleCollege = (event) => {
    setCollege(event.target.value);
  };

  const handleChangeCollege = (e) => {
    setOtherCollegeName(e.target.value);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      college: college == "Other" ? otherCollegeName : college,
      useranme: username,
      mobile: details.mobile,
      name: details.name,
    };
    localStorage.setItem("details", JSON.stringify(data));

    const formData = new FormData();

    formData.append("Name", details.name);
    formData.append("Username", username);
    formData.append("Email", email);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzznHIwal0QMGVez1I0yAUUtJTPoRc37z3silegTBOqQkWptwV7NNp8SEaQhAGLJNru/exec",
        formData
      )
      .then((res) => {
        navigate("/register");
      })
      .catch((err) => {
        console.log(err);
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
                value={details.name}
                name="name"
                onChange={handleChange}
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
                onChange={handleUsername}
                required
                // value={userDetails.email}
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                type="text"
                name="mobile"
                pattern="[6789][0-9]{9}"
                title="Please enter valid phone number"
                required
                fullWidth
                onChange={handleChange}
                // value={userDetails.number}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">College</InputLabel>
                <Select
                  sx={{ width: 100 + "%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="College"
                  value={college}
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
              {college == "Other" ? (
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
              {(!details.name || !username || !college || !details.mobile) && (
                <p>Please fill all required fields</p>
              )}
              <button
                disabled={
                  !details.name || !username || !college || !details.mobile
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
