import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="container my-5">
        <h3 className="text-center text-dark mb-3">Register Now</h3>
        <form class="mb-4">
          <div class="mb-3">
            <label for="name" class="form-label fw-bold">
              Your Name :
            </label>
            <input
              type="text"
              class="form-control"
              formControlName="name"
              name="name"
              id="name"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold" for="username">
              User Name :
            </label>
            <input
              type="text"
              formControlName="username"
              name="user name"
              id="user name"
              class="form-control "
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fw-bold">
              Your Email:
            </label>
            <input
              type="email"
              formControlName="email"
              name="email"
              id="email"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label fw-bold ">
              Password :
            </label>
            <input
              type="password"
              formControlName="password"
              name="password"
              id="password"
              class="form-control"
            />
          </div>

          <div class="mb-3">
            <label for="cPassword" class="form-label fw-bold ">
              cPassword :
            </label>
            <input
              type="password"
              formControlName="cPassword"
              name="cPassword"
              id="cPassword"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-success py-2 px-4">
            Register Now
          </button>
          <p class="text-center">
            Already have account!{" "}
            <Link to={"/login"} class="text-dark fw-bold">
              Login
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
