import Navbar from "./components/Navbar"
import Destinations from "./components/pages/Destinations"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Gallery from "./components/pages/Gallery"
import Contact from "./components/pages/Contact"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
