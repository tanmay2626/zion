import { Button, Input, TextField } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./payment.scss";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Payment() {
  const cartValue = localStorage.getItem("cartValue");
  const [file, setFile] = useState(null);
  const [transaction, setTransaction] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const currFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", currFile);
    formData.append("upload_preset", "hhfnuhff");
    axios
      .post("https://api.cloudinary.com/v1_1/dldntxfqv/upload", formData)
      .then((res) => {
        setFile(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setTransaction(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = localStorage.getItem("details");
    const amount = localStorage.getItem("cartValue");
    const events = localStorage.getItem("eventsSelected");
    const eventsArray = JSON.parse(events);
    const selectedEvents = eventsArray
      .map((event) => `${event.title}:${event.members}`)
      .join(", ");
    const details = JSON.parse(data);
    const name = details.name;
    const email = details.email;
    const college = details.college;
    const mobile = details.mobile;

    const formData = new FormData();

    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Mobile", mobile);
    formData.append("College", college);
    formData.append("Events", selectedEvents);
    formData.append("TransactionId", transaction);
    formData.append("Amount", amount);
    formData.append("ImgUrl", file);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbyNvWCMFjTBBLjZedXK8NtPLp5fR5OeFHcPPyOwcRT63bZ-iIKLl2ZrtUopTBYkrLkl/exec",
        formData
      )
      .then((res) => {
        navigate("/success");
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar active={"register"} />
      <section id="payment" className="payment">
        <div className="qr-container">
          <h2>Scan below code to pay</h2>
          <img src={"./images/qr-code/" + cartValue + ".png"} alt="qr-code" />
          <h4>₹{cartValue}</h4>
          <p>Attach payment screenshot *</p>
          <Button>
            <Input onChange={handleFileChange} type="file" accept="image/*" />
          </Button>
          <TextField
            className="transaction-id"
            id="outlined-basic"
            label="Transaction ID"
            variant="outlined"
            name="transaction"
            onChange={handleChange}
            required
            // value={userDetails.name}
          />
          <input type="submit" onClick={handleSubmit} className="ss-submit" />
          <Link to="/register">
            <p>Go Back</p>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
