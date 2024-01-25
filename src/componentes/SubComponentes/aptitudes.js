import React from "react"

export default class Aptitudes extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //que lo vemos más adelante, chaval
        }
    }

    render(){
        return(
            <div>
            <h1>{this.props.aptitud}</h1>
            <br></br>
            aprendí "<b>{this.props.aptitud}</b>" en "{this.props.lugar}"
            </div>
        )
    }
}