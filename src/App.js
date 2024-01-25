import './App.css';
import Menu from './menu';
import Footer from './footer'
import Bienvenida from './Bienvenida';
import Licencias from './licencias';
import Estudios from './estudios';
import Aptitudes from './aptitudes';

import InicioPagina from './paginas/inicioPagina';
import ContactoPagina from './paginas/contactoPagina';
import Sobre_miPagina from './paginas/sobre_mi';

import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <header>
        <Menu /> 
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<InicioPagina />}/>
          
          <Route path='/' element={<ContactoPagina />}/>
          
          <Route path='/' element={<Sobre_miPagina />}/>
        </Routes>
      </Router>
      <div>
        <Bienvenida dato='nombre'/>
        <Bienvenida dato='apellido'/>
        <Licencias academia='academia' curso='curso' aptitudes_relacionadas='aptitudes relacionadas a la licencia' diploma='diploma.jpg' />
        <Estudios inicio='inicio' fin='fin' estudio='estudio' />
        <Aptitudes aptitud='aptitud' lugar='lugar aptitud' />
      </div>

      <footer className='row'>
        <div className='col-12 d-flex'>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
