
import SimpleCarouselSlider from 'react-simple-carousel-image-slider';
import 'bootstrap/dist/css/bootstrap.css'; 
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Navbar from './Navbar';
//import SimpleCarouselSlider from 'rscis/SimpleCarouselSlider';

function App() {

  var images = [
    require('./img/Group.png'),
    require('./img/Group_2.png'),
    
  ];
  return (
    <div className="App">

      <div style={{  margin: "auto" }}>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
     
    
      </div>
    </div>
  );
}

export default App;
