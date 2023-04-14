import EventCard from "../../components/EventCard/EventCard";
import Footer from "../../components/Footer/Footer";
import "./events.scss";
import eventDetails from "../../data/eventDetails.json";

function Events() {
  // console.log(eventDetails);
  return (
    <>
      <section id="events">
        <h2>Events</h2>
        <div className="event-card-container">
          {eventDetails.eventDetails.map((event, index) => (
            <EventCard
              key={event.eventid}
              src={event.src}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              prizePool={event.prizePool}
              maxMembers={event.maxMembers}
              desc={event.desc}
              // add any additional props needed here
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Events;
