import {Link, NavLink} from "react-router-dom";


export default function NavBar () {
    return (
        <ul className="navBar">
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive && 'active'}
                >main page
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({isActive}) => isActive && 'active'}
                >about page</NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    className={({isActive}) => isActive && 'active'}
                >blogs page</NavLink>
            </li>
        </ul>
    )
}