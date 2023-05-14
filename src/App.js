import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ticket from "./components/Ticket";
import Navigate from "./components/Navigate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/navigate" element={<Navigate />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
      </Routes>
    </div>
  );
}

export default App;
