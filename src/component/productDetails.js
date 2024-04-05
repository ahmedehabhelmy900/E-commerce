import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../sass/productDetails.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/products-slice";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.product}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  const productId = product.id;
  function addCart() {
    let input = document.querySelector("input");
    dispatch(addProduct([product, input.value]));
  }
  return (
    <div className="prodDet">
      <img src={product.image} />
      <div>
        <h1>{product.title}</h1>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
        <h2>{product.price}$</h2>
      </div>
      <div className="addCart">
        <button onClick={() => addCart()}>Add to Cart</button>
        <input
          type="number"
          name="number"
          defaultValue="1"
          min="1"
          max="100"
          placeholder="1"
        ></input>
      </div>
    </div>
  );
}
export default ProductDetails;
