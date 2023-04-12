import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "./pages/home/Home";
import EventPage from "./pages/eventPage/EventPage";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Register from "./pages/register/Register";
import EnterDetails from "./pages/enterDetails/EnterDetails";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [details, setDetails] = useState({
    name: "",
    mobile: 0,
  });

  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register details={details} />} />
        <Route
          path="/details"
          element={<EnterDetails setDetails={setDetails} />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Switch>
    </Router>
  );
}

export default App;
