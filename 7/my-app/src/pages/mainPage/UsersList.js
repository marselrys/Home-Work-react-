export default function UsersList ({postList}) {

    return (
        <>
        {postList.map(post =>
            <li>
                <p>title:{post.title}</p>
                <p>ody:{post.body}</p>
            </li>
            )}
        </>
     
    )
}