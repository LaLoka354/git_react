import './App.css';
import Menu from './componentes/menu';
import Footer from './componentes/footer';

import InicioPagina from './paginas/inicioPagina';
import ContactoPagina from './paginas/contactoPagina';
import PortfolioPagina from './paginas/PortFolio';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container-fluid classContainer" >
        <Router>
          <header>
            <Menu /> 
          </header>

            
            <Routes>
              <Route path='/' element={<InicioPagina />} />
              <Route path='/contacto' element={<ContactoPagina />} />
              <Route path='/portfolio' element={<PortfolioPagina />} />
            </Routes>


        </Router>
      </div>
      <footer className='container-fluid'>
            <Footer />
      </footer>
    </>
  );
}

export default App;
