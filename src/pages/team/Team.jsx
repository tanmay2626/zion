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
          <h3>Head Coordinators</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Rohant pawar.jpg"}
              name="Rohant Pawar"
            />
            <TeamCard src={"images/team/prabhat.jpg"} name="Prabhat Chaubey" />
            <TeamCard
              src={"images/team/Vedika Bhattad.jpeg"}
              name="Vedika Bhattad"
            />
          </div>
          <h3>Event Coordinators</h3>
          <div class="team-members">
            <TeamCard src={"images/team/surajYadav.jpg"} name="Suraj Yadav" />
          </div>
          <h3>Event Sub-Coordinators</h3>
          <div class="team-members">
            {/* <TeamCard src={"images/team/Santosh Dukare.jpg"} name="Santosh Dukare"/> */}
            <TeamCard src={"images/team/palak.png"} name="Palak Mantri" />
            <TeamCard
              src={"images/team/Mayur Sawant .jpg"}
              name="Mayur Sawant"
            />
          </div>
          <h3>On Ground Management Head</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Sahil Srivastava.jpg"}
              name="Sahil Shrivastava"
            />
          </div>
          <h3>Finance Department</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Chaitanya Gaikwad .jpg"}
              name="Chaitanya Gaikwad"
            />
            <TeamCard
              src={"images/team/Madhura Bele.jpg"}
              name="Madhura Bele"
            />
            <TeamCard
              src={"images/team/Ojas Surpatne.jpg"}
              name="Ojas Surpatne"
            />
          </div>
          <h3>Props & Hardware</h3>
          <div class="team-members">
            <TeamCard src={"images/team/Parth Nayse.jpg"} name="Parth Nayse" />
            <TeamCard
              src={"images/team/Akshata Tiwatane .jpg"}
              name="Akshata Tiwatane"
            />
            <TeamCard src={"images/team/ruchi.jpg"} name="Ruchi Nagwanshi" />
            <TeamCard src={"images/team/Ayush Jain.jpeg"} name="Ayush Jain" />
          </div>
          <h3>Content Head</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Sagar Ghodke.jpg"}
              name="Sagar Ghodke"
            />
          </div>
          <h3>Marketing</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Kanishka Kulkarni.jpg"}
              name="Kanishka Kulkarni"
            />
            <TeamCard
              src={"images/team/Devang Handoo.jpg"}
              name="Devang Handoo"
            />
            <TeamCard
              src={"images/team/Mahadev Kashid.jpg"}
              name="Mahadev Kashid"
            />
          </div>
          <h3>Campaigning</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Rahul Pandit.jpg"}
              name="Rahul Pandit"
            />
            <TeamCard
              src={"images/team/Yashwant Jadhav .jpg"}
              name="Yashwant Jadhav"
            />
            <TeamCard
              src={"images/team/Shreyas Udavant.jpg"}
              name="Shreyas Udavant"
            />
          </div>
          <h3>Editor</h3>
          <div class="team-members">
            <TeamCard src={"images/team/Vicky Sinha.jpg"} name="Vicky Sinha" />
          </div>
          <h3>Video Editor</h3>
          <div class="team-members">
            <TeamCard src={"images/team/Kunal Bhoi.jpg"} name="Kunal Bhoi" />
            {/* <TeamCard src={"images/team/Sanket Patil.jpg"} name="Sanket Patil"/> */}
          </div>
          <h3>Social Media</h3>
          <div class="team-members">
            <TeamCard
              src={"images/team/Makarand Mangaokar.jpg"}
              name="Makarand Mangaokar"
            />
            <TeamCard
              src={"images/team/Suved Pardeshi.jpg"}
              name="Suved Pardeshi"
            />
          </div>
          <h3>Tech Support</h3>
          <div class="team-members">
            <TeamCard src={"images/team/Harsh Anand.jpg"} name="Harsh Anand" />
            <TeamCard
              src={"images/team/Kartikey Singh.jpeg"}
              name="Kartikey Singh"
            />
            <TeamCard
              src={"images/team/Tanmay Waykar.jpeg"}
              name="Tanmay Waykar"
            />
            <TeamCard
              src={"images/team/Tushar Thaware.jpg"}
              name="Tushar Thaware"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Team;
