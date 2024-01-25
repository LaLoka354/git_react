import React from "react"
import '../App.css'

export default class Menu extends React.Component {

    render(){
        return(
            <div className="row">
                <div className="classGradienteMenu col-12 d-flex align-items-center">
                    <h1> Lua </h1>
                    <span className="mx-2"> Inicio </span>
                    <span className="mx-2"> Portfolio </span>
                    <span className="mx-2">boton ekisde</span>
                    <span className="mx-2">Contacto</span>
                </div>
                <div className="elemento">
                    hola
                </div>
            </div>
            
        )
    }
}