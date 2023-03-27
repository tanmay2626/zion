import Navbar from "../../components/Navbar/Navbar";
import Events from "../events/Events";
import './eventPage.scss';

function EventPage(){
    return(
        <>
            <Navbar active={'events'}/>
            <div className="events-wrapper">
            <Events />
            </div>
        </>
    );
}

export default EventPage;