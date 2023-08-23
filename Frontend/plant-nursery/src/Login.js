import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { userLogin } from "./services/LoginService";

const Login = ({ setRole }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: "user", 
  });
  const [loading, setLoading] = useState(false); 

  function handleChange(event){
    const {name, value} = event.target;
    setLoginData(()=> ({   //(prevData)=> ({...prevData,[name]:value})
        ...loginData,
        [name] : value,
    }));
  }
  console.log("loginnnnnnnn",loginData);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    try {
      const userData = await userLogin(loginData);

      if (userData) {
        // Successful login
        // Do something with userData or navigate to a new route
        // For example, navigate("/dashboard");
        setRole(userData.role);
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };


  return (
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
                    type="email"
                    id="form3Example3"
                    class="form-control"
                    placeholder="E-mail"
                    name="username"
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
                    <option value="user">User</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <button type="submit" className="gif-button" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
                </button>
              </form>
              <br />
              <p>
                Don't have an account?{" "}
                <a
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "green",
                  }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
