 import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ContactList from './components/contact-list';
import AddContact from './components/add-contact';
import MapView from './components/map-view';



function App() {

  return (
    <Router>
      <div className="App">
        <header className="header container">
          <h2>Contacts</h2>
          <span className="links">
            <Link to="/" className="headerLink">
              <h3>Table</h3>
            </Link>

            <Link to="/map-view" className="headerLink">
              <h3>Map</h3>
            </Link>
          </span>
          
        </header>
        <Route exact path="/" component={ContactList} />
        <Route exact path="/add-contact" component={AddContact} />
        <Route exact path="/map-view" component={MapView} />
      </div>
    </Router>
  );
}

export default App;
