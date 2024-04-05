import { useEffect, useState } from "react";
import Product from "./product";
import "../sass/product.scss";

function Products() {
  const [products, setProducts] = useState([]);
  const defaApi = "https://fakestoreapi.com/products";
  const [categoreis, setCategoreis] = useState([]);
  const allProd = () => {
    fetch(defaApi)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };
  const allcategoreis = () => {
    fetch(`${defaApi}/categories`)
      .then((res) => res.json())
      .then((res) => setCategoreis(res));
  };
  const category = (categ) => {
    fetch(`${defaApi}/category/${categ}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };
  useEffect(() => {
    allProd();
    allcategoreis();
  }, []);
  const activeClass = (name) => {
    document.querySelectorAll(".cate button").forEach((e) => {
      e.className = "";
      if (e.innerHTML == name) {
        e.className = "active";
      }
    });
  };
  return (
    <div>
      <div className="cate">
        <button
          className="active"
          onClick={() => {
            allProd();
            activeClass("All");
          }}
        >
          All
        </button>
        {categoreis.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                category(cat);
                activeClass(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="allProducts">
        {products.map((prod) => {
          if (prod.id === 5 || prod.id === 7) {
            return;
          }
          return <Product product={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Products;
