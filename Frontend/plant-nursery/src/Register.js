import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
// import { userLogin } from "./services/LoginService";

const Register = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "ROLE_USER"
  });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setSignupData(() => ({
      //(prevData)=> ({...prevData,[name]:value})
      ...signupData,
      [name]: value,
    }));
  }
  console.log("loginnnnnnnn", signupData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const userData = await response.json();

      console.log("---> userData", userData);

      if (userData) {
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Welcome to Plant Nursery <br />
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Explore our wide range of plants and gardening supplies. Log in to
              get started with your plant-growing journey!
            </p>
          </div>

          <div className="login-card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <h3 style={{ marginBottom: "2em", fontWeight: "bold" }}>
                Log in
              </h3>
              <form onSubmit={handleSubmit}>
              <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control"
                    placeholder="Username"
                    name="userName"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control"
                    placeholder="E-mail"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <select className="form-select" name="role" onChange={(e) => handleChange(e)}>
                    <option value="ROLE_USER">ROLE_USER</option>
                    <option value="ROLE_STAFF">ROLE_STAFF</option>
                    <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                  </select>
                </div>

                <button type="submit" className="gif-button" disabled={loading}>
                  {loading ? "Signing up..." : "Signup"}
                </button>
              </form>
              <br />
              <p>
                Already have an account?{" "}
                <a
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "green",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Register;
