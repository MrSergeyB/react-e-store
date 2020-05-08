import React from "react";
import "./App.css";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Catalog from "../src/pages/catalog";
import Contacts from "./pages/contacts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />{" "}
          <Route path="/about" component={About} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
