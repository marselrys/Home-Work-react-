import React from "react";



class CountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, btnMinus: true}
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => this.setState({count: this.state.count - 1})

    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count) {
            console.log(prevState.count)

        }
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement} disabled={this.state.btnMinus}>-</button>
            </>
        )
    }
}
export default CountPage;