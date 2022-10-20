
import { Link } from "react-router-dom";
import notfound from "./undraw_Page_not_found_re_e9o6.png"

const NotFound = () => {
    return (
        <>
            <section className="container mt-5 w-25 text-center">
                <div>
                <img src={notfound} alt="not found" className="w-100" />
                </div>

                <p class="text-danger fs-1 mb-3">Oops! Something is wrong.</p>
      <Link class="shadow p-2 fs-4 fw-bold text-decoration-none text-black-50" to="/">
        Go To Home
      </Link>
            </section>
        </>
    )
}

export default NotFound;