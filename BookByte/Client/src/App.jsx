import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home.jsx";
import "./app.css";
import Buypage from "./components/Buysection/Buypage.jsx";
import Chatpage from "./components/Chatsection/Chatpage.jsx"
import Signup from './components/Homepage/Signup.jsx'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buypage" element={<Buypage />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;