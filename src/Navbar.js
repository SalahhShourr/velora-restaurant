function Navbar(){
    return(
    <nav className="navbar">
        <h1>Velora</h1>

        <div className="navButtons">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/reservation">Reservations</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    );
}

export default Navbar;