import { useState } from "react";
import "./registerCard.scss";

function RegisterCard({
  src,
  title,
  date,
  time,
  location,
  prizePool,
  maxMembers,
  price,
  desc,
  cartValue,
  setCart,
}) {
  const [opened, setOpened] = useState(false);
  function handleDetailOpener() {
    setOpened((prev) => {
      return !prev;
    });
  }
  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setCart((prev) => {
        return prev + parseInt(price);
      });
    } else {
      setCart((prev) => {
        return prev - parseInt(price);
      });
    }
  }
  return (
    <div className={opened ? "register-card opened" : "register-card"}>
      <img src={src} onClick={handleDetailOpener} />
      <div className="right">
        <div className="left" onClick={handleDetailOpener}>
          <h3>{title}</h3>
          <div className="price">
            <span>Entry fee : </span>₹{price}/-
          </div>
        </div>
        <input
          type="checkbox"
          name="event-name"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="event-details">
        <div className="top">
          <div className="date">
            <span>Date : </span>
            {date}
          </div>
          <div className="time">
            <span>Time : </span>
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
      </div>
      <img src="images/x.png" className="x" onClick={handleDetailOpener}/>
    </div>
  );
}

export default RegisterCard;
