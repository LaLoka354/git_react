import './App.css';
import Menu from './menu';
import Footer from './footer'
import Bienvenida from './Bienvenida';
import Licencias from './licencias';
import Estudios from './estudios';
import Aptitudes from './aptitudes';


function App() {
  return (
    <div className="container">
      <header>
        <Menu /> 
      </header>

      <div>
        <Bienvenida dato='nombre'/>
        <Bienvenida dato='apellido'/>
        <Licencias />
        <Estudios />
        <Aptitudes />
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
