import React from "react"

export default class Bienvenida extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //que lo vemos más adelante, chaval
        }
    }

    render(){
        return(
            <div>
            <p>Dime tu {this.props.dato}:3</p>
            <input type='text' placeholders={this.props.dato}/>
            
            </div>
        )
    }
}