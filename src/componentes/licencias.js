import React from "react"
import '../App.css'
import {Link} from 'react-router-dom'

export default class Licencias extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            escondido: true
        }
        this.toggleEsconder = this.toggleEsconder.bind(this);
    }



    toggleEsconder () {
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))
    }

    render(){
        return(
            <div className={(this.state.escondido ? 'col-3' : 'col-6')}>
                <div className="titulo1">{this.props.curso} </div>
                <br></br>
                <br></br>
                <br></br>
                <Link className="classButtonLink3" onClick={this.toggleEsconder} > {(this.state.escondido ? 'VER LICENCIA' :'OCULTAR LICENCIA')} </Link>
                <Link className="classButtonLink3" to={this.props.linkLicencia} target="blank"> link </Link>
               
                <div className={(this.state.escondido ? 'classNone' : 'classButtonLink2')}>
                    <img className='imgHover' src={this.props.diploma} alt={this.props.curso} />
                    <br></br>
                    <div className="titulo2"> {this.props.academia} </div>
                    <div className="titulo">{this.props.curso} </div>
                    <br></br>
                    <h3> Aptitudes relacionadas: {this.props.aptitudes}</h3>
                    <br></br>
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}