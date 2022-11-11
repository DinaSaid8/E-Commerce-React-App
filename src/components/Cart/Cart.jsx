import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import empty from "./undraw_empty_cart_co35.png";
import {
  decrementCart,
  deleteItem,
  incrementCart,
} from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartList = useSelector((state) => state.counteritem.cartitems);

  console.log(cartList);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cartList, cartList.quantity]);

  const dispatch = useDispatch();

  let incrementQuantity = (item) => {
    dispatch(incrementCart(item));
  };

  let decrementQuantity = (item) => {
    dispatch(decrementCart(item));
  };

  let removeFromcart = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <>
      {!!cartList.length && (
        <div className="container mt-5 w-75">
          <h3 className="text-uppercase text-black-50 my-4 fs-2 fw-bold text-center">
            Cart Info
          </h3>
          <Table striped bordered hover className=" text-center shadow  ">
            <thead>
              <tr>
                <th className="w-25">Image</th>
                <th className="w-25">Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            {cartList.map((item) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>
                        <img src={item.image} alt="" className="w-25 mb-4" />
                      </td>
                      <td>{item.title}</td>
                      <td>
                        <button
                          className="btn btn-danger text-white me-2 "
                          onClick={() => incrementQuantity(item)}
                        >
                          +
                        </button>
                        {item.quantity}
                        <button
                          className="btn btn-success text-white ms-2 "
                          onClick={() => decrementQuantity(item)}
                        >
                          -
                        </button>
                      </td>
                      <td>{item.price * item.quantity} EGP</td>
                      <td>
                        <button
                          className="btn btn-danger my-2 text-white"
                          onClick={() => removeFromcart(item)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </Table>
          <h4 className="text-end me-5">
            Total price is : <span>{total.toFixed(1)} EGP</span>
          </h4>
        </div>
      )}
      {!cartList.length && (
        <section className="container pt-4 w-75  text-center">
          <p class="text-danger fs-1 text-uppercase">Your Cart is Empty</p>
          <div>
            <img src={empty} alt="Welcome Page" className="w-50" />
          </div>
          <Link
            class="shadow p-2 fs-4 mb-2 fw-bold text-decoration-none text-uppercase text-black-50"
            to="/products"
          >
            Shop Now
          </Link>
        </section>
      )}
    </>
  );
};

export default Cart;
