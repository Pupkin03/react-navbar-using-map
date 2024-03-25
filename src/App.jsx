
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import OurService from './Components/OurService'
import About from './Components/About'
import Career from './Components/Career'
import PreviewJob from './Components/PreviewJob'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route index path= "/" element={<Home/>} />
      <Route path= "/about" element={<About/>} />
      <Route path= "/service" element={<OurService/>} />
      <Route path= "/career" element={<Career/>} />
      <Route path="/career/preview-job/:jobid" element={<PreviewJob/>} />
    </Routes>
    </div>
  )
}

export default App