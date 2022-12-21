import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

// import component
import StartSeite from './components/StartSeite';
import Navbar from "./components/Navbar";
import Herren from "./components/Herren";
import Frauen from "./components/Frauen";

function App() {
  return (
<>
<Navbar />
   <Container  className='mb-4'>
      <Routes>
                    <Route path="/" element={<StartSeite />} />
                    <Route path="/herren" element={<Herren />} />
                    <Route path="/frauen" element={<Frauen />} />
                    {/* <Route path="/kinder" element={<Kinder />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/footer" element={<Footer />} /> */}
                </Routes> 
   </Container></>
  );
}

export default App;
