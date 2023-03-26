import AboutCard from "../../components/AboutCard/AboutCard";
import Navbar from "../../components/Navbar/Navbar";
import Events from "../events/Events";
import "./home.scss";

function Home() {
  const d2 = new Date("04/14/2023");
  const d1 = new Date();
  var diff = d2.getTime() - d1.getTime();
  var daydiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return (
    <>
      <Navbar />
      <section id="homepage">
        <h3>Utopia Unleashed</h3>
        <h2>Utopia</h2>
        <img src="./images/Vector1.png" className="over-image" />
        <h3 className="time">
          <span style={{ color: "#E5C3F1", opacity: 1, fontWeight: 600 }}>
            {daydiff}
          </span>{" "}
          Days to go
        </h3>
        <button className="explore-events">Explore Events</button>
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
              }
            />
            <AboutCard
              title={"Events"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
              }
            />
            <AboutCard
              title={"Seminars"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
              }
            />
          </div>
          <div>
            <img src="./images/astronaut.gif" alt="" srcset="" />
          </div>
          <div>
            <AboutCard
              title={"/Utopia"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
              }
            />
            <AboutCard
              title={"Hackathons"}
              desc={
                "Lorem ipsum dolor sit amet, quis nostrud exercitation."
              }
            />
            <AboutCard
              title={"Tech Talk"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation."
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
