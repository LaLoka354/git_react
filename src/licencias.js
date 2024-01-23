import React from "react"

export default class Licencias extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //que lo vemos más adelante, chaval
        }
    }

    render(){
        return(
            <div>
            <h1>{this.props.academia}</h1>
            <i>{this.props.curso}</i>
            <br></br>
            {this.props.aptitudes_relacionadas}
            <br></br>
            {this.props.diploma}
            </div>
        )
    }
}