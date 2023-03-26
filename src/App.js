import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
