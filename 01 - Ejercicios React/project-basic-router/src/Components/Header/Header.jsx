import { Navbar } from "../Navbar/Navbar"
import "./Header.css"


export const Header = ({children}) => {
  return (
    <header>
        {children}
        <Navbar className="navbar"/>
    </header>
  )
}
