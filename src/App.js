import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import EventPage from "./pages/eventPage/EventPage";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
    </Router>
  );
}

export default App;
