import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Product(props) {
  let product = props.product;
  return (
    <div className={`product`}>
      <img src={product.image} />
      <h4>{product.title}</h4>
      <p className="price">{product.price}$</p>
      <Link to={`products/${product.id}`} className="more">
        more
        <FontAwesomeIcon icon={faArrowRight} className="goMoreArr" />
      </Link>
    </div>
  );
}
export default Product;
