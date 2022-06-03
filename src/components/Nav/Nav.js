import { Link } from "react-router-dom";

function Nav (){

    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item ">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Produtos e Serviços</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/contact">Contato</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/contactView">Lista de Contatos</Link>
            </li>
        </ul>
    </nav>
    
    )
   
}

export default Nav;