import { FaShoppingCart } from "react-icons/fa";
import {nav} from './data.js'
import './Navbar.css';


function Navbar() {
    const items = nav.map((item) => {
        return (
            <li key={item.key}><a href={item.link}>{item.name}</a></li>
        )
    })
    return (
        <div className="nav">
            <span className="nav_logo">
                logo
            </span>
            <ul className="nav_ul">
                {items}
            </ul>
            <div>
            <FaShoppingCart style={{height:"1.5em", width:"1.5em"}}/>
            </div>
            
        </div>
    );
}

export default Navbar;