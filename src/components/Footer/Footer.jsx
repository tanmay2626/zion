import "./footer.scss";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-wrapper">
        <div className="left-container">
          <h2>Zion 2023</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="right-container">
          <div className="left">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/">Event</a>
            <a href="/">Team</a>
            <a href="/">Contact</a>
          </div>
          <div className="right">
            <h3>Socials</h3>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
            <a href="/">Whatsapp</a>
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
}

export default Footer;
