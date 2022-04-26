import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Dashboard from "./Components/Dashboard/Dashboard";
import Error from "./Components/Error/Error";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Records from "./Components/Records/Records";
import Faq from "./Components/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/records" element={<Records />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
