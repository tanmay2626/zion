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
    const details = JSON.parse(data);
    const name = details.name;
    const email = details.email;
    const college = details.college;
    const mobile = details.mobile;

    const dataToSheet = {
      Name: name,
      Email: email,
      Mobile: mobile,
      College: college,
      TransactionId: transaction,
      ImgUrl: file,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/bd3072c0-9531-4149-990e-6fcf9b0ed2a8",
        dataToSheet
      )
      .then((res) => {
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
      });

    //localStorage.removeItem("details");
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
