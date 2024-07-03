import Logo from"../assets/images/resturant-removebg-preview.png"
import { Link } from "react-router-dom";

const Header = () => {
    return(
      <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={Logo} style={{width:"80px"}}/>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" >
             Home🏠
            </Link>
            {/* <link to=""/> */}
          </li>
          <li className="nav-item">
            <Link  to="/about" className="nav-link">
              AboutUs☺
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" >
              ContactUs📞
              </Link>
          </li>
          <li className="nav-item">
            <Link  to="/cart" className="nav-link" >
              Cart🛒
              </Link>
          </li>    
        </ul>
      </div>
    </div>
  </nav>
    );
  };
  export default Header;