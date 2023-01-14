 import { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import UsersList from "./UsersList";

 export default function MainPage () {

    const[main, setMain] = useState([])

    const getUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {setMain(data)})
    }


 const mainnavigete = useNavigate()

 const todoBock = () => {
    mainnavigete(-1)
 }

 useEffect(() => {
    getUsers()
 },[])

 return(
    <>
    <button onClick={todoBock}>blockpages</button>
    <h1>MainPage</h1>
    <UsersList postList={main}/>
    </>
 )
} 