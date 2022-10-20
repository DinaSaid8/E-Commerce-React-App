import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {LoginAction}from "../../../redux/auth"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginAction());
    navigate("/products");
  };
  return (
    <>
      <section class="container my-5 w-50">
        <h3 class="text-center text-dark"> Welcome^^</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmaillogin">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="alert alert-danger">Email is required</p>
            )}
          </Form.Group>

          {/* password */}
          <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              {...register("password", {
                required: true,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="alert alert-danger">Password is required</p>
            )}
          </Form.Group>

          <Button type="submit" class="btn btn-danger mb-3 py-2 px-4">
            Login
          </Button>

          <p class="text-center">
            Don't have account?
            <Link to={"/register"} class="fw-bold text-dark">
              Register
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
};

export default Login;
