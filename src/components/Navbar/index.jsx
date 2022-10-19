import { FaOpencart } from "@react-icons/all-files/fa/FaOpencart";

const Navbar = ({count}) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-bg-gradient bg-light shadow">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold text-danger fs-3 fst-italic" href="/">
            DS <span className="fs-6 ">shop</span>
          </a>

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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-danger fs-3" href="/Cart">{count}
<FaOpencart/></a>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <a className="nav-link" href="/counter">
                  Counter
                </a>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <a className="nav-link" href="/login">
                  Signin
                </a>
              </li>
              <li className="nav-item mt-2 fw-bold">
                <a className="nav-link" href="/register">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
