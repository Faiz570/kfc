import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Terms from "./components/Terms";
import Footer from "./components/Footer";


import "./App.css"


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/terms" element={<Terms/>}></Route>
   </Routes>  
   <Footer/>
   
   
   
    </>
  );
}

export default App;
