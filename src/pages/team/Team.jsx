import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TeamCard from "../../components/MemberCard/MemberCard";
import "./team.scss";

function Team() {
  return (
    <>
      <Navbar active={"team"} />
      <section id="team">
        <h2>Our Team</h2>
        <div class="team-container">
          <h3>Event Co-ordinators</h3>
          <div class="team-members">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          <h3>Event Sub Co-ordinatorss</h3>
          <div class="team-members">
            <TeamCard />
          </div>
          <h3>Finance Department</h3>
          <div class="team-members">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          <h3>Content and Marketing</h3>
          <div class="team-members">
            <TeamCard />
            <TeamCard />
          </div>
          <h3>Campaigning</h3>
          <div class="team-members">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          <h3>Social Media</h3>
          <div class="team-members">
            <TeamCard />
            <TeamCard />
          </div>
          <h3>Tech Team</h3>
          <div class="team-members">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Team;
