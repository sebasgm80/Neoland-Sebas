import './Header.css';
import {Image} from '../Image/Image';
const Header = () => {

return (
    <header className="header">
        <Image src="https://reactjs.org/logo-og.png" alt="ReactJS"/>
        <h1>Ejercicios de React Neoland</h1>
    </header>
    );
};

export default Header;