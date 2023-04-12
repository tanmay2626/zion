import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import EventPage from "./pages/eventPage/EventPage";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Register from "./pages/register/Register";
import EnterDetails from "./pages/enterDetails/EnterDetails";
import Payment from "./pages/payment/Payment";
import Success from "./pages/success/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<EnterDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Switch>
    </Router>
  );
}

export default App;
