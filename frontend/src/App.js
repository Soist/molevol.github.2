import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import Drop_off from "./components/pages/Drop_off";
import Navbar from "./components/Navbar";

const style = {
  position: "relative",
  margin: "500px auto",
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home style={style} />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/drop-off/ibb" element={<Drop_off location="IBB" />} />
          <Route path="/drop-off/ebb" element={<Drop_off location="EBB" />} />
          <Route path="/drop-off/es&t" element={<Drop_off location="ES&T" />} />
          <Route path="/drop-off/mose" element={<Drop_off location="MoSE" />} />
          <Route
            path="/drop-off/cherry-emerson"
            element={<Drop_off location="Cherry Emerson" />}
          />
          <Route
            path="/drop-off/marcus"
            element={<Drop_off location="Marcus" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
