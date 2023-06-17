import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Formik } from "formik";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("here!!!");

  let something = "name";

  const [heading, setHeading] = useState("first heading");

  const login = () => {};

  useEffect(() => {
    console.log("here in useEffect!!");
    return ()=>{
      // remove evet listener
    }
  }, [heading]);

  return (
    <>
    <h1>{heading}</h1>
    <input
      type={"text"}
      value={heading}
      onChange={(e) => {
        something = e.target.value;
        setHeading(e.target.value);
      }}
    />
      <h1>Login</h1>
      <input
        type={"email"}
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type={"password"}
        placeholder="Enter your password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>

      {/* <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik> */}

      <button
        onClick={() => {
          navigate("register");
        }}
      >
        Go to register
      </button>
    </>
  );
}

export default Login;
