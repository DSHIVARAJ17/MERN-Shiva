import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <header>
            <nav>
                <li>< Link to="/Home">Home</Link></li>
                <li>< Link to="/About">About</Link></li>
                <li>< Link to="/Gallery">Gallery</Link></li>
                <li>< Link to="/Contact">Contact</Link></li>
                <li>< Link to="/Signup">Signup</Link></li>
            </nav>
        </header>
    )
}
export default Navbar