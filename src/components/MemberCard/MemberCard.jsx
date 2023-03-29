import "./memberCard.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function MemberCard() {
  return (
    <div class="card">
      <div id="top-left" class="corner"></div>
      <div id="bottom-right" class="corner"></div>
      <div class="card-wrap">
        <div class="card-img">
          <img src="./images/team2.png" alt="profile" />
        </div>
        <div class="card-footer">
          <div>Kartikey Singh</div>
          <div>
            <FaLinkedin /> <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
