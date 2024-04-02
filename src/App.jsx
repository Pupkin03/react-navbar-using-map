// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./Component.jsx/Navbar";
import Home from "./Component.jsx/Home";
import About from "./Component.jsx/About";
import Services from "./Component.jsx/Services";
import Career from "./Component.jsx/Career";
import PreviewJob from "./Component.jsx/PreviewJob";
import Contact from "./Component.jsx/Contact";
import Profile from "./Component.jsx/Profile";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile/>} />
          {/* the jobId beneath indicates a dynamic route to preview each job 
          shown on career page, it can be destructured in the preview folder using the useParams hook */}
          <Route path="/career/preview-job/:jobId" element={<PreviewJob />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
