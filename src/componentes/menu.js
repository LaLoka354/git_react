import React from "react"
import '../App.css'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {

    render(){
        return(
            <div className="row">
                <div className="classGradienteMenu col-12 d-flex align-items-center">
                    <Link className="pruebaFuente"> L . Medeiros  </Link>
                    <Link className="classButtonLink" to={'/'}> <i class="bi bi-house-heart-fill"></i> Inicio <i class="bi bi-house-heart-fill"></i> </Link>
                    <Link className="classButtonLink" to={'/portfolio'}> <i class="bi bi-folder2-open"></i> Portfolio <i class="bi bi-folder2-open"></i> </Link>
                    <Link className="classButtonLink" to={'/contacto'}> <i class="bi bi-headset"></i> Contacto <i class="bi bi-headset"></i> </Link>
                </div>
            </div>
            
        )
    }
}