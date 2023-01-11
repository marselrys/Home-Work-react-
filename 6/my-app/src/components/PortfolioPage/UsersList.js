

export default function UsersList ({UsersList}) {
    return(
        <>
        {UsersList.map((user, index) => <li key={index}>{user}</li>)}
        </>
    )
}