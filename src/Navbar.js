import { Link } from "react-router-dom";

function Navbar(){
    const scrollToTop = () => {
        window.scrollTo(0,0);
    };

    return(
    <nav className="navbar">
        <h1>Velora</h1>

        <div className="navButtons">
          <Link onClick={scrollToTop} to="/">Home</Link>
          <Link onClick={scrollToTop} to="/menu">Menu</Link>
          <Link onClick={scrollToTop} to="/reservation">Reservations</Link>
          <Link onClick={scrollToTop} to="/contact">Contact</Link>
        </div>
      </nav>
    );
}

export default Navbar;