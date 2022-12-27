import React from 'react';
import './App.css';
// import bootstrap from 'bootstrap';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Photos from "./pages/Photos.js";
import Haikus from "./pages/Haikus.js";
import Quotes from "./pages/Quotes.js";
import Music from "./pages/Music.js";
import Professional from "./pages/Professional.js";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <p>Hello World</p>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/haikus" component={Haikus} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/professional" component={Professional} />
      </Routes>
      

    </div>
  );
}

export default App;
