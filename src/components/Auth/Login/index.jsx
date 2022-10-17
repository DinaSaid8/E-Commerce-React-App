import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section class="container my-5">
        <h3 class="text-center text-dark"> Welcome^^</h3>
        <form>
          <label for="email" class="form-label fw-bold">
            Email Address :
          </label>
          <br />
          <input
            class="w-100 form-control "
            type="email"
            required
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />

          <label for="inputPassword" class="form-label fw-bold mt-3">
            Password :
          </label>
          <br />
          <input
            id="Password"
            class="w-100 form-control mb-3"
            type="password"
            required
            name="Password"
          />
          <button type="submit" class="btn btn-danger mb-3 py-2 px-4">
            Login
          </button>

          <p class="text-center">
            Don't have account?
            <Link to={"/register"} class="fw-bold text-dark">
              Register
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
