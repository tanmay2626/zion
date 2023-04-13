import "./eventCard.scss";

function EventCard({
  src,
  title,
  date,
  time,
  location,
  prizePool,
  maxMembers,
  desc,
}) {
  return (
    <div className="event-card">
      <img src={src} alt="event-image" />
      <div className="event-wrapper">
        <h3>{title}</h3>
        <div className="event-details">
          <div className="top">
            <div className="date">
              <span>Date : </span>
              {date}
            </div>
            <div className="time">
              <span>Duration : </span>
              {time}
            </div>
          </div>
          <div className="bottom">
            <div className="location">
              <span>Location : </span>
              {location}
            </div>
            <div className="prize">
              <span>Prize pool : </span>
              {prizePool}
            </div>
          </div>
          <p className="desc">{desc}</p>
          {/* {maxMembers > 1 ? <select name="participants"></select> : null} */}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
