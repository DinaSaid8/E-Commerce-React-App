import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart } from "../../redux/cartSlice";
import { increment } from "../../redux/counterSlice";
const ProductList = () => {
  const rateCount = useSelector((state) => state.counter.counter);
  const cartList = useSelector((state) => state.counteritem);
  // const cartcount = useSelector((state) => state.counteritem.counteritem);

  console.log(rateCount);
  console.log(cartList);
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

  let addToCart = (product) => {
    dispatch(AddToCart(product));

  }


  console.log(rateCount);
  console.log(cartList);
  return (
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
        <div className="row  gy-5 ">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-6 d-flex offset-1 shadow pt-4 ps-3 rounded-4   ">
                <div>
                  <div className="w-50 d-flex justify-content-between  ">
                    <img src={product.image} alt="" className="w-100 mb-4" />
                  </div>
                  <h4>
                    <Link
                      className="text-dark fs-6 text-decoration-none "
                      to={`/details/${product.id}`}
                      key={product.id}
                    >
                      {product.title}
                    </Link>
                  </h4>
                  <h5 className="fs-4 text-danger">{product.price} EGP</h5>
                  <button
                    className="btn btn-danger my-2 text-white"
                    onClick={()=>addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>

                <h6 className="text-warning">{product.rating.rate}⭐</h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductList;
