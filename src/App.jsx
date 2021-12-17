import React from "react";
import Home from './Components/Home'
import {Route,Routes} from 'react-router-dom'
import VidCall from "./Components/VidCall";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
