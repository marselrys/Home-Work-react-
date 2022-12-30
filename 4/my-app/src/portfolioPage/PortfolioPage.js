import React from "react";



class PortfolioPage extends React.Component{

    constructor(props) {
        super(props)
        this.state = {works:[]}
    }

    handleClick = () => {
        this.setState({works: ["work1","work2"]})
    }


    render() {
        return(
            <>
            <ul>
                <li>{this.state.works}</li>
                <li>{this.state.works}</li>
            </ul>
            <button onClick={this.handleClick}>get</button>
            
            </>
        )
    }
}




export default PortfolioPage;   