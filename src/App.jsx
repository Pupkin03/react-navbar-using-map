// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Career from "./component/Career";
import PreviewJob from "./component/PreviewJob";
import Contact from "./component/Contact";
import Profile from "./component/Profile";
import ProfileInfo from "./component/ProfileInfo";


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
          <Route path="/profile/profileInfo/:profileId" element={<ProfileInfo/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
