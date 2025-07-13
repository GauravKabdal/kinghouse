
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Services from './pages/Services'
import Gallery from './pages/Gallery'

import Contact from './pages/Contact'
import MapSection from './pages/MapSection'
import Footer from './components/Footer'

function App() {


  return (
    <>
      
      <Home />
      <About/>
      <Rooms />
      <Services/>
      <Gallery/>
      <Contact />  
      <MapSection />
      <Footer/>
    </>
  )
}

export default App
