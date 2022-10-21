import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../redux/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const [product, setProducts] = useState({});

  const dispatch = useDispatch();

  let addToCart = (product) => {
    dispatch(AddToCart(product));
  };

  return (
    <>
      <h1 className="text-center text-black-50 m-3">Product Details</h1>
      <div className="container  shadow p-3 rounded-4 ">
        <div className="row justify-content-around pt-5">
          <div className="col-2">
            <img src={product?.image} alt="" className="w-100 mb-4" />
          </div>
          <div className="col-9">
            <h4 className="text-dark fs-4">{product?.title}</h4>
            <h5 className="fs-4 text-danger">{product?.price} EGP</h5>
            <h5 className="fs-6 text-black-50">{product?.description} </h5>
            <h6 className="text-warning">{product?.rating?.rate}⭐</h6>
            <h6 className="fs-4 text-warning">
              {product?.rating?.count} Pieces Left{" "}
            </h6>
            <button
              className="btn btn-danger my-2 text-white"
              disabled={disable}
              onClick={() => {
                addToCart(product);
                setDisable(true);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
