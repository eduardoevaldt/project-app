import { Link, useNavigate } from "react-router-dom";
import { deleteToken, isAdmin } from "../../Auth";


function Nav() {

    const navigate = useNavigate()

    const logout = () =>{
        deleteToken();
        navigate('/');
    }

    return (
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
            </ul>
            <ul className="navbar-nav">
                {
                    isAdmin() ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactView">Lista de Contatos</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={logout}>Logout</a>
                            </li>
                        </>
                    :
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/login">Login</Link>
                        </li>
                }
            </ul>
        </nav>

    )

}

export default Nav;