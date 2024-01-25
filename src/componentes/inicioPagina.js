import React from "react"
import './App.css';
import Menu from '../menu';
import Footer from './SubComponentes/footer'
import Bienvenida from './SubComponentes/Bienvenida';
import Licencias from '../licencias';
import Estudios from './SubComponentes/estudios';
import Aptitudes from './SubComponentes/aptitudes';
import ContactoPagina from "./contactoPagina";
import Sobre_miPagina from "./sobre_mi";

import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

export default class InicioPagina extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        //que lo vemos más adelante, chaval
    }
}

    render(){
        return(
          <div className="container">
          <header>
            <Menu /> 
          </header>
          <Router>
            <Routes>
              <Route path='/' element={<InicioPagina />}/>
              
              <Route path='/c' element={<ContactoPagina />}/>
              
              <Route path='/s' element={<Sobre_miPagina />}/>
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
        )
    }
}




