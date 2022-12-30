import React from "react";



class ContactsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ""}
    }

    changeInput = (event) => {
        this.setState({value: event.target.value})
    
    }

    

    add = () => {
        console.log(this.state.value)
    }

    clear = () => {
        this.setState({value: this.changeInput.value=""})
    }

    render() {
        return(
            <>
                <input value={this.state.value} type="text" onChange={this.changeInput}/>
                <button onClick={this.add}>add</button>
                <button onClick={this.clear}>clear</button>
            
            </>        
        )
    }
}

export default ContactsPage;