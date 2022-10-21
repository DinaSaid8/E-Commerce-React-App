// import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../../redux/counterSlice";

const ProductList = () => {
  const rateCount = useSelector((state) => state.counter.counter);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  console.log(products);

  const dispatch = useDispatch();
  //redux
  //rating
  let incrementRate = () => {
    if (rateCount < 5) {
      dispatch(increment(1));
    } else {
      dispatch(increment(0));
    }
  };

  return (
    <>
      {products.length ? (
        <section>
          <div className="pt-5 ps-5 ">
            <button
              className="btn btn-warning fw-bold  text-black-50 text-uppercase"
              onClick={incrementRate}
            >
              Rate Our Product
            </button>
            <p className="d-inline text-warning ms-4 fw-bold fs-4">
              {rateCount}⭐
            </p>
          </div>
          <h1 className="text-center text-black-50 mb-4">My Products</h1>
          <div className="container">
            <div className="row me-0  gy-5 ">
              {products.map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 d-flex offset-1 shadow py-4 ps-3 rounded-4   ">
                    <div>
                      <div className="w-50 d-flex justify-content-between  ">
                        <img
                          src={product.image}
                          alt=""
                          className="w-100 mb-4"
                        />
                      </div>
                      <h4>
                        <Link
                          className="text-dark fs-6 text-decoration-none h-25 "
                          to={`/details/${product.id}`}
                          key={product.id}
                        >
                          {product.title} <span> click me </span>
                        </Link>
                      </h4>
                      <h5 className="fs-4 text-danger">{product.price} EGP</h5>
                    </div>
                    <h6 className="text-warning">{product.rating.rate}⭐</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="container text-center position-absolute top-50 m-5">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default ProductList;
