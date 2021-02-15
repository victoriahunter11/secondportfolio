import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Header/>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
