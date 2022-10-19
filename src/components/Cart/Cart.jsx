import { useEffect, useState } from "react";


const Cart = () => {
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
              <div className="col-md-3 d-flex  shadow p-3 offset-1 rounded-4   ">
                <div>
                  <div className="w-50 d-flex justify-content-between  ">
                    <img src={product.image} alt="" className="w-100 mb-4" />
                  </div>
                  <h4 
                    className="text-dark fs-6 text-decoration-none">{product.title}
                  </h4>
                  <h5 className="fs-4 text-danger">{product.price} EGP</h5>
                </div>
                <h6 className="text-warning">{product.rating.rate}⭐</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
   
}

export default Cart;