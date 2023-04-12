import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
  setEventsSelected,
  eventsSelected,
  eventid,
}) {
  const [opened, setOpened] = useState(false);
  const [members, setMembers] = useState(1);
  const [selected, setSelected] = useState(false);
  function handleDetailOpener() {
    setOpened((prev) => {
      return !prev;
    });
  }
  function handleChange(e) {
    const { value, checked } = e.target;
    setSelected((prev) => {
      return !prev;
    });
    if (checked) {
      setCart((prev) => {
        return prev + members * parseInt(price);
      });
      setEventsSelected((prev) => {
        return [...prev, { eventid: value, members: members }];
      });
    } else {
      setCart((prev) => {
        return prev - members * parseInt(price);
      });
      setEventsSelected((prev) => {
        return prev.filter((a) => a.eventid !== value);
      });
    }
  }
  function setTeamMembers(e) {
    setMembers(e.target.value);
    setEventsSelected((prev) => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].eventid == eventid) {
          prev[i].members = e.target.value;
        }
      }
      return prev;
    });
    setCart((prev) => {
      return (
        prev - members * parseInt(price) + e.target.value * parseInt(price)
      );
    });
  }

  return (
    <div className={opened ? "register-card opened" : "register-card"}>
      {selected ? null : <img src={src} onClick={handleDetailOpener} />}
      {/* {opened ? <img src={src} onClick={handleDetailOpener} />  : null} */}
      <div className="right">
        <div className="left" onClick={handleDetailOpener}>
          <h3>{title}</h3>
          <div className="price">
            <span>Entry fee : </span>₹{price}/Person
          </div>
        </div>
        {selected ? (
          <FormControl sx={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">Team Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={members}
              label="Team Size"
              onChange={setTeamMembers}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        ) : null}
        {opened ? null : (
          <input
            type="checkbox"
            name="event-name"
            value={eventid}
            onChange={handleChange}
          />
        )}
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
      <img src="images/x.png" className="x" onClick={handleDetailOpener} />
    </div>
  );
}

export default RegisterCard;
