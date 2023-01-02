import React from "react";




class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            age: "",
            password: ""
        }
    }

    changeInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    register = (event) => {
        event.preventDefault()
        if(this.state.username.trim() === "") {
            console.log("username пуст")
            return;
        }else if(this.state.email.trim() === "") {
            console.log("email пуст");
            return;
        }else if(this.state.age.trim() === "") {
            console.log("age  пуст");
            return;
        }else if(this.state.password.trim() === "") { 
            console.log("password пуст")
            return;
        }

        console.log(this.state);
    }

    clearInput = () => {
        this.setState({username:this.changeInput.value="",
        email:this.changeInput.value="",
        age:this.changeInput.value="",
        password:this.changeInput.value="",
    }) 
        
    }

    render() {
        return(
            <>
                <form onSubmit={this.register}>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.changeInput}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeInput}
                    />
                    <input
                        type="number"
                        placeholder="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.changeInput}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeInput}
                    />

                    <button type="submit">register</button>
                    <button onClick={this.clearInput}>clear</button>     
                </form>
            </>
        )
    }
}

export default RegisterPage;





