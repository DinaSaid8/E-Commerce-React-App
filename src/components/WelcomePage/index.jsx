import { Link } from "react-router-dom";
import welcome from "./undraw_welcome_cats_thqn.png";
const WelcomePage = () => {
  return (
    <>
      <section className="container mt-5 text-center">
        <div >
          <img src={welcome} alt="Welcome Page" className="w-50" />
        </div>

        <p class="text-danger d-block fs-1  mb-4 text-uppercase">
          Please, login to view our products
        </p>
        <Link
          class="shadow  p-2 fs-4 me-2 fw-bold text-decoration-none text-uppercase text-black-50"
          to="/login"
        >
          login
        </Link>
        <Link
          class=" shadow p-2 fs-4 fw-bold text-decoration-none text-uppercase text-black-50"
          to="/register"
        >
          Register
        </Link>
      </section>
    </>
  );
};

export default WelcomePage;
