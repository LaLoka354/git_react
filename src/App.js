import './App.css';
import Menu from './componentes/menu';
import Footer from './componentes/footer';
import Bienvenida from './Bienvenida';
import Licencias from './componentes/licencias';
import Estudios from './componentes/estudios';
import Aptitudes from './componentes/aptitudes';


function App() {
  return (
    <div className="">
      <header>
        <Menu /> 
      </header>
    <div className='container'>
          <div>
            <Bienvenida dato='nombre'/>
            <Bienvenida dato='apellido'/>
            <Licencias />
            <Estudios />
            <Aptitudes />
          </div>
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
