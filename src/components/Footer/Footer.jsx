import "./footer.scss";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-wrapper">
        <div className="left-container">
          <h2>Zion 2023</h2>
          <p>
            Zion is a highly anticipated annual event that attracts participants
            from various colleges and universities across India to showcase
            their technical skills and innovative ideas. The festival provides a
            platform for students to learn, grow, and network with like-minded
            individuals in a competitive yet fun environment.
          </p>
        </div>
        <div className="right-container">
          <div className="left">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/events">Event</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="right">
            <h3>Socials</h3>
            <a href="https://www.instagram.com/zion.dit/?hl=en">Instagram</a>
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
