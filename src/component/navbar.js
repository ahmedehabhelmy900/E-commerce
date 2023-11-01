import "../sass/navbar.css";
function NavBar() {
  return (
    <div className="navBar">
      <div className="container">
        <h1 className="logo">
          <a>E-commerce</a>
        </h1>
        <ul className="navUl">
          <li className="active">Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
