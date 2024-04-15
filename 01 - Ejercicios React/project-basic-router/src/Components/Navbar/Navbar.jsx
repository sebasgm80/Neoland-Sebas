import './Navbar.css'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/about"><button>About</button></NavLink>
            <NavLink to="/listado"><button>Listado</button></NavLink>
        </nav>
    )
}
