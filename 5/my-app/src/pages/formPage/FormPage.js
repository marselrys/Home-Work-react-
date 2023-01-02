import React from "react";



class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            age: "",
            password: ""
        }
    }

    registerUser = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render () {
        return (
            <>
                <form onSubmit={this.registerUser}>
                    <input
                        type="text"
                        placeholder="username"
                        onChange={(event) => this.setState({username: event.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        onChange={(event) => this.setState({email: event.target.value })}
                    />
                    <input
                        type="number"
                           placeholder="age"
                        onChange={(event) => this.setState({age: event.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(event) => this.setState({password: event.target.value })}
                    />

                    <button type="submit">register</button>
                </form>

            </>
        )
    }
}
export default FormPage;