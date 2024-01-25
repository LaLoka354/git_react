import React from "react"

export default class Estudios extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //que lo vemos más adelante, chaval
        }
    }

    render(){
        return(
            <div>
            <h1>{this.props.estudio}</h1>
            {/* ACÁ IRÍA UN BOOLEANO  DE "COMPLETO/INCOMPLETO" PERO NO SÉ CÓMO SE PONE :'3*/}
            {this.props.inicio} - {this.props.fin}
            </div>
        )
    }
}