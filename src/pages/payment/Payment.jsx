import { Button, Input, TextField } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./payment.scss";
import { useState } from "react";
import axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

// const cloudinaryCore = new Cloudinary({
//   cloud_name: "dldntxfqv",
//   api_key: "717397115915819",
//   api_secret: "XqLJWCGmFiWIVZCYsYP-ddZjB3cT",
// });

export default function Payment() {
  const cartValue = localStorage.getItem("cartValue");
  const [file, setFile] = useState(null);
  const [transaction, setTransaction] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hhfnuhff");
    axios
      .post("https://api.cloudinary.com/v1_1/dldntxfqv/upload", formData)
      .then((res) => {
        const dataToSheet = {
          Name: name,
          Email: email,
          Mobile: mobile,
          College: college,
          TransactionId: transaction,
          ImgUrl: res.data.secure_url,
        };
        axios
          .post(
            "https://sheet.best/api/sheets/bd3072c0-9531-4149-990e-6fcf9b0ed2a8",
            dataToSheet
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.removeItem("details");
  };
  return (
    <>
      <Navbar active={"register"} />
      <section id="payment" className="payment">
        <div className="qr-container">
          <h2>Scan below code to pay</h2>
          <img src={"./images/" + cartValue + ".jpeg"} alt="qr-code" />
          <h4>₹{cartValue}</h4>
          <Button>
            <Input onClick={handleFileChange} type="file" accept="image/*" />
          </Button>
          <TextField
            id="outlined-basic"
            label="Transaction"
            variant="outlined"
            name="transaction"
            onChange={handleChange}
            required
            // value={userDetails.name}
          />
          <input type="submit" onClick={handleSubmit} className="ss-submit" />
        </div>
      </section>
      <Footer />
    </>
  );
}
