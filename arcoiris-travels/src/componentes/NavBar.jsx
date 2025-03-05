import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar