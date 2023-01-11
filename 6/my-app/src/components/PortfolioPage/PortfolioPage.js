import { useState } from "react"
import UsersList from "./UsersList"


export default function PortfolioPage () {

const [user, setUsers] = useState([])

const handleUser = () => {
    setUsers(["Work1","Work2"])
}

    return (
        <>
        <button onClick={handleUser}>get</button>
        <UsersList UsersList={user}/>
        </>
    )
}