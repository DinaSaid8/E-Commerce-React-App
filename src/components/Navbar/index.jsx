import { FaOpencart } from "@react-icons/all-files/fa/FaOpencart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCounter = useSelector((state) => state.counteritem.counteritem);
  // const cartCounter = useSelector((state) => state.counteritem);
  // const statee = useSelector((state) => state.counteritem.quantity);
// console.log(statee);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-bg-gradient bg-light shadow">
        <div className="container-fluid px-5">
          <Link
            className="navbar-brand fw-bold text-danger fs-3 fst-italic"
            to="/"
          >
            DS <span className="fs-6 ">shop</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-danger fs-3" to="/Cart">
                  {cartCounter}
                  <FaOpencart />
                </Link>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <Link className="nav-link" to="/login">
                  Signin
                </Link>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <Link className="nav-link" to="/register">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
