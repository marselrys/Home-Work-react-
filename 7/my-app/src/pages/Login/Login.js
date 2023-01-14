import {useNavigate} from "react-router-dom";

function Login(props) {
    const navigate = useNavigate()
    const login = () => {
        setTimeout(() => {
            navigate('/', {state: "Hello world"})
        }, 3000)
    }

    return (
        <>
            <input type="text" placeholder="login"/>
            <input type="text" placeholder="password"/>
            <button onClick={login}>login</button>
        </>
    );
}

export default Login;