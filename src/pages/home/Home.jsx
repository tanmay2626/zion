import AboutCard from "../../components/AboutCard/AboutCard";
import Navbar from "../../components/Navbar/Navbar";
import Events from "../events/Events";
import "./home.scss";

function Home() {
  const d2 = new Date("04/19/2023");
  const d1 = new Date();
  var diff = d2.getTime() - d1.getTime();
  var daydiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return (
    <>
      <Navbar active={"home"} />
      <section id="homepage">
        <h3>Utopia Unleashed</h3>
        <h2>Utopia</h2>
        <img src="./images/Vector1.png" className="over-image" />
        <h3 className="time">
          <span
            style={{
              color: "#E5C3F1",
              opacity: 1,
              fontWeight: 900,
              fontSize: "40px",
            }}
          >
            {daydiff}
          </span>{" "}
          Days to go
        </h3>
        <div className="explore-events">
          <a href="#events">
            <button className="b1">Explore Events</button>
          </a>
          <a href="/details">
            <button className="b2">Register Now</button>
          </a>
        </div>
        <img
          src="./images/arrow-down.svg"
          width="40px"
          className="down-arrow"
        />
      </section>
      <section id="about">
        <h2>About</h2>
        <div className="about-card-wrapper">
          <div>
            <AboutCard
              title={"/Zion"}
              desc={
                'Zion is an annual technical festival organized by Dr. D.Y. Patil Institute of Technology, Pimpri, Pune, that aims to provide a platform for students to showcase their technical skills and creativity.'
              }
            />
            <AboutCard
              title={"Events"}
              desc={
                "Zion hosts a diverse range of events including technical competitions, workshops, cultural programs, tech events, and more."
              }
            />
            <AboutCard
              title={"Seminars"}
              desc={
                "Zion hosts a range of informative seminars by industry experts that cover the latest trends, challenges, and opportunities in various domains."
              }
            />
          </div>
          <div id="astronaut-animation">
            <img src="./images/astronaut.png" alt="" srcset="" />
          </div>
          <div>
            <AboutCard
              title={"/Utopia"}
              desc={
                "The theme of Utopia for Zion suggests a vision for a perfect and ideal society that is free from flaws and imperfections. The festival aims to inspire participants to think outside the box and ideate towards building a better future."
              }
            />
            <AboutCard
              title={"Hackathons"}
              desc={"Hackathons that provide a platform for students to collaborate, innovate and build exciting projects within a limited time frame."}
            />
            <AboutCard
              title={"Tech Talk"}
              desc={
                "Tech talks in Zion feature industry experts and thought leaders sharing their insights and experiences on the latest trends and developments in the field of technology."
              }
            />
          </div>
        </div>
      </section>
      <Events />
    </>
  );
}

export default Home;
