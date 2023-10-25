import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import CartWidget from "./CartWidget";
import './NavBar.css';

function NavBar() {

  return (
    <header class="header NavBarFont">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid NavBarWrapper">
          <Link to="/"><img src={logo} alt="" class="NavBarLogo" /></Link>
          <div class="navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav NavBarFont">
              <li class="nav-item">
                <Link class="nav-link" to="/categoria/Remeras">Remeras</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categoria/Pantalones">Pantalones</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categoria/Camisas">Camisas</Link>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  )
}

export default NavBar