import React from "react"
import '../App.css'

export default class Menu extends React.Component {

    render(){
        return(
            <div className="row">
                <div className="classGradienteMenu col-12 d-flex align-items-center">
                    <div className="pruebaFuente"> L . Medeiros  </div>
                    <button className="classButtonLink"> Inicio </button>
                    <button className="classButtonLink"> Portfolio </button>
                    <button className="classButtonLink">boton ekisde</button>
                    <button className="classButtonLink">Contacto</button>
                </div>
            </div>
            
        )
    }
}