import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '.pages/Home'
import Contato from '.pages/Contato'
import Empresa from '.pages/Empresa'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
