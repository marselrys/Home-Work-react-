import {useLocation} from "react-router-dom";


export default function AboutPage () {
    const location = useLocation()

    console.log(location)
    return (
        <>
            <h1>About page</h1>
        </>
    )
}