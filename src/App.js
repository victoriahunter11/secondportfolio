import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Portfolio from './pages/portfolio';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Router>
  );
}

export default App;
