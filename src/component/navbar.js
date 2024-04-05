import { useEffect } from "react";
import "../sass/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function NavBar() {
  const prodCart = useSelector((state) => state.product);
  const location = useLocation();
  useEffect(() => {
    document.querySelectorAll("ul li").forEach((e) => (e.className = ""));
    if (location.pathname === "/") {
      document.querySelector("#product").className = "active";
    } else if (location.pathname === "/About") {
      document.querySelector("#about").className = "active";
    } else if (location.pathname === "/contact") {
      document.querySelector("#contact").className = "active";
    } else if (location.pathname === "/cart") {
      document.querySelector("#cart").className = "active";
    }
  }, [location]);
  return (
    <div className="navBar">
      <div className="container">
        <h1 className="logo">
          <Link to="/">E-commerce</Link>
        </h1>
        <ul className="navUl">
          <li id="product">
            <Link to="/">Products</Link>
          </li>
          <li id="about">
            <Link to="/About">About us</Link>
          </li>
          <li id="contact">
            <Link to="/contact">contact us</Link>
          </li>
          <li id="cart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>{prodCart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
