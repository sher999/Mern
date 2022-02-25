import "./App.css";
import Nvabar from "./Components/Nvabar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { Route,Routes} from "react-router-dom";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <Nvabar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
