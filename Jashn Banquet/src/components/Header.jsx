import "./Header.css";
function Header() {
  return (
    <>
      <header className="head">
        <a href="#" className="logo">
          <i className="fas fa-heart"></i>&nbsp;Jashn Banquet&nbsp;
          <i className="fas fa-heart"></i>
        </a>
        <nav className="navbar ">
          <a href="#" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#vendor">Events</a>
          <a href="#venue">Venues</a>
          <a href="#contact">Contact</a>
        </nav>
        <div id="menu-bar">
          <i className="fas fa-bars"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
