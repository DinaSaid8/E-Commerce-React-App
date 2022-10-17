import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductList = ({setCount}) => {
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
  return (
    <>
      <h1 className="text-center text-black-50 m-4">My Products</h1>
      <div className="container ms-5">
        <div className="row gy-5">
          {products.map((product) => {
            return (
              <div className="col-md-3 d-flex  shadow p-4 offset-1 rounded-4   ">
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
                  <button className="btn btn-danger my-2" onClick={setCount}>ADD TO CART</button>

                </div>

                <h6 className="text-warning">{product.rating.rate}⭐</h6>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductList;
