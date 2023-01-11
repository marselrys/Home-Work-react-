import {useState} from "react";


export default function AboutUs () {

    const [click, setClick] = useState(false)

    const handleText = () => {
        setClick (!click)
    }

    return(
        <>
         <button onClick={handleText}>click</button>

         <p className={click ? "active" : "hidden"}>Вот агай</p>
        </>
    )

}