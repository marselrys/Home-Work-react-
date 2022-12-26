import React from "react"
import classes from "./onecomponent.module.css"

class OneComponent extends React.Component {

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


export default OneComponent;