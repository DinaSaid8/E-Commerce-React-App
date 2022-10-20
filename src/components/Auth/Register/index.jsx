import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";
import { LoginAction } from "../../../redux/auth";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch());
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginAction());
    navigate("/products");
  };

  const genderOptions = [
    {
      value: "Femail",
      label: "Female",
    },
    {
      value: "Male",
      label: "Male",
    },
  ];
  const catogeryOptions = [
    {
      value: "shirt",
      label: "shirt",
    },
    {
      value: "jacket",
      label: "jacket",
    },
    {
      value: "jeans",
      label: "jeans",
    },
  ];

  return (
    <>
      <section className="container my-5 w-50">
        <h3 className="text-center text-dark mb-3">Register Now</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* UserName */}
          <Form.Group className="mb-3  fw-bold" controlId="formBasicName">
            <Form.Label>User Name :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              {...register("name", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className=" text-danger">Name is required</p>
            )}
            {errors?.name?.type === "minLength" && (
              <p className=" text-danger">Min Length is 5</p>
            )}
            {errors?.name?.type === "maxLength" && (
              <p className=" text-danger">Max Length is 20</p>
            )}
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3  fw-bold" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: /^([a-zA-Z0-9_]+)@([a-zA-Z0-9]+)\.([a-zA-z]+)$/,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-danger">Email is required</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="text-danger">Invalid Email</p>
            )}
          </Form.Group>

          {/* phone */}
          <Form.Group className="mb-3  fw-bold" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number"
              {...register("number", {
                required: true,
                pattern:
                  /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/,
              })}
            />
            {errors?.number?.type === "required" && (
              <p className="text-danger">Phone Number is required</p>
            )}
            {errors?.number?.type === "pattern" && (
              <p className="text-danger"> Invalid Phone Number</p>
            )}
          </Form.Group>

          {/* password */}
          <Form.Group className="mb-3  fw-bold" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-danger">Password is required</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="text-danger">
                Password must have minimum eight characters, at least one
                letter, one number and one special character:
              </p>
            )}
          </Form.Group>

          {/* confirm password */}
          <Form.Group className="mb-3 fw-bold" controlId="formBasicCPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm Password"
              autoComplete="on"
              {...register("cpassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "CPassword not match Password";
                  }
                },
              })}
            />

            {errors?.cpassword?.type === "required" && (
              <p className="text-danger">You have to confirm password</p>
            )}
            {errors?.cpassword?.type === "validate" && (
              <p className="text-danger">{errors.cpassword.message}</p>
            )}
          </Form.Group>

          {/* check box */}
          <Form.Group className="mb-3 fw-bold" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me"
              {...register("checkbox", {
                required: true,
              })}
            />

            {errors?.checkbox?.type === "required" && (
              <p className="text-danger">You have to confirm password</p>
            )}
          </Form.Group>

          {/* Select */}
          <ReactSelect options={genderOptions} className="mb-3" />
          <CreatableSelect options={catogeryOptions} isMulti isClearable />

          {/* submit */}
          <Button
            variant="primary"
            type="submit"
            className="btn btn-success text-white fw-bold py-2 px-4 mt-3 d-block"
          >
            Register
          </Button>

          {/* To login */}
          <p className="text-center">
            Already have account!{" "}
            <Link to={"/login"} className="text-dark fw-bold">
              Login
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
};

export default Register;
