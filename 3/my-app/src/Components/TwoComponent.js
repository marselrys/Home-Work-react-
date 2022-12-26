import React from "react"
import classes from "./twocomponent.module.css"


class TwoComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <>
            <h1 className={classes.title}>{this.props.user.name}</h1> 
            <h1 className={classes.title}>{this.props.user.age}</h1> 
            </>
        )
    }
}


export default TwoComponent;