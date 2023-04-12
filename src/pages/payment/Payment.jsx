import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./payment.scss";

export default function Payment() {
    const cartValue = localStorage.getItem("cartValue");
  return (
    <>
      <Navbar active={"register"} />
      <section id="payment" className="payment">
        <div className="qr-container">
          <h2>Scan below code to pay</h2>
          <img src={"./images/" + cartValue + ".jpeg"} alt="qr-code" />
          <h4>₹{cartValue}</h4>
          <input type="file" id="myFile" name="filename" />
          <input type="submit" className="ss-submit" />
        </div>
      </section>
      <Footer />
    </>
  );
}
