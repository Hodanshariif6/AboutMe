import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutMe from "./components/AboutMe";
import AllBoxes from "./components/AllBoxes";
import AllReviews from "./components/AllReviews";
import AllSeminars from "./components/AllSeminars";
function App() {
  return <>
     <Header />
    <Routes>
    
    
    <Route path="/" element= {<Home/>} />
    <Route path="/about" element= {<About/>} />
    <Route path="/Coun" element= {<Contact/>} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/allboxes" element={<AllBoxes />} />
      <Route path="/reviews" element={<AllReviews />} />
        <Route path="/seminars" element={<AllSeminars />}/>
    </Routes>
     <Footer/>
  </>
}

export default App;