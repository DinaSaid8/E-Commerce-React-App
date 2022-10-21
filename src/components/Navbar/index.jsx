import { FaOpencart } from "@react-icons/all-files/fa/FaOpencart";
import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutAction } from "../../redux/auth";
import { removeall } from "../../redux/cartSlice";

const NavComponent = () => {
  const cartCounter = useSelector((state) => state.counteritem.cartitems);
  const authState = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LogoutAction());
  };
  let clear = () => {
    dispatch(removeall());
  };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartCounter.forEach((item) => {
      total += item.quantity;
    });
    setTotal(total);
  }, [cartCounter, cartCounter.quantity]);

  return (
    <>
      <Navbar expand="lg" className="navbar bg-bg-gradient bg-light shadow">
        <Container className="container-fluid px-5">
          <Link
            className="navbar-brand fw-bold text-danger fs-3 fst-italic"
            to="/home"
          >
            DS <span className="fs-6 ">shop</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            className="collapse navbar-collapse "
            id="basic-navbar-nav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!authState ? (
                <></>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-danger fs-3" to="/Cart">
                      {total}
                      <FaOpencart />
                    </Link>
                  </li>
                  <li className="nav-item mt-2 fw-bold">
                    <Link className="nav-link" to="/products">
                      Our Products
                    </Link>
                  </li>
                  <li className="nav-item mt-2 fw-bold">
                    <Link className="nav-link" to="/counter">
                      Support Us
                    </Link>
                  </li>
                  <li className="nav-item mt-2 fw-bold">
                    <Link
                      className="nav-link"
                      onClick={() => {
                        logout();
                        clear();
                      }}
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
