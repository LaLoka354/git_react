import './App.css';
import Menu from './menu';
import Footer from './footer'

function App() {
  return (
    <div className="container">
      <header>
        <Menu /> 
      </header>
      <footer className='row'>
        <div className='col-12 d-flex'>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
