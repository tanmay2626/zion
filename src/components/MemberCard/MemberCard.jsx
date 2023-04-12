import "./memberCard.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function MemberCard({src, name}) {
  return (
    <div class="card">
      <div id="top-left" class="corner"></div>
      <div id="bottom-right" class="corner"></div>
      <div class="card-wrap">
        <div class="card-img">
          <img src={src} alt={name} />
        </div>
        <div class="card-footer">
          <div>{name}</div>
          <div>
            <FaLinkedin /> <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
