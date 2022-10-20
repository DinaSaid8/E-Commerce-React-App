import { FaOpencart } from "@react-icons/all-files/fa/FaOpencart";
import { Container, Navbar} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavComponent = () => {
  const cartCounter = useSelector((state) => state.counteritem.cartitems);
  // const cartCounter = useSelector((state) => state.counteritem);
  // const statee = useSelector((state) => state.counteritem.quantity);
console.log(cartCounter);
  return (
    <>
      <Navbar expand="lg" className="navbar bg-bg-gradient bg-light shadow">
        <Container className="container-fluid px-5">
          <Link
            className="navbar-brand fw-bold text-danger fs-3 fst-italic"
            to="/"
          >
            DS <span className="fs-6 ">shop</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />


         
          <Navbar.Collapse
            className="collapse navbar-collapse "
            id="basic-navbar-nav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-danger fs-3" to="/Cart">
                  {cartCounter.length}
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
                  Login
                </Link>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
