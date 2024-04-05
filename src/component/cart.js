import { useEffect, useState } from "react";
import "../sass/cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { delProduct, clear, changeQauntity } from "../store/products-slice";

function Cart() {
  const selector = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const totalPrice = selector.reduce((acc, prod) => {
    return (acc += prod[0].price * prod[1]);
  }, 0);

  return (
    <div className="container">
      <div className="cart">
        <div className="prod">
          {selector.map((product) => {
            return (
              <div className="box" id={product[0].id} key={product[0].id}>
                <div className="info">
                  <div>
                    <img src={product[0].image} />
                  </div>
                  <div>
                    <h4>{product[0].title}</h4>
                    <p>{product[0].price}</p>
                  </div>
                </div>
                <div className="options">
                  <button onClick={() => dispatch(delProduct(product[0].id))}>
                    Delete
                  </button>
                  <input
                    onChange={() => {
                      dispatch(
                        changeQauntity([
                          product[0].id,
                          document.querySelector(
                            `[id = "${product[0].id}"] input`
                          ).value,
                        ])
                      );
                    }}
                    type="number"
                    name="number"
                    defaultValue={product[1]}
                    min="1"
                    max="100"
                    placeholder="1"
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <p>
            {selector.length} items :{totalPrice.toFixed(2)}
          </p>
          <button onClick={() => dispatch(clear())}>purchase</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
