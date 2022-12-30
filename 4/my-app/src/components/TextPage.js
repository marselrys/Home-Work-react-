import React from "react";
import Text from "./Text";

class TextPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text:false}
    }

    handleText = () => {
        this.setState({text: !this.state.text})
    }


    render() {
        return(
            <>
            <button onClick={this.handleText}>click</button>
            {
                this.state.text && <Text/>
            }
            
            </>
        )
    }
}


export default TextPage;