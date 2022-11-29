import "./App.css";
import React from "react";
import Rellax from "rellax";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Wall from "./Components/Wall";
import Input from "./Components/Input";
import Default from "./Components/Default";
import Test from "./Components/Test";
import Submit from "./Components/Submit";
import NotSubmit from "./Components/NotSubmit";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/submitted" element={<Submit />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/input" element={<Input />} />
        <Route path="/notsubmit" element={<NotSubmit />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
