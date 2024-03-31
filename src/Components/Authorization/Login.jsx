import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Login.css";
const URL = import.meta.env.VITE_BASE_URL;

// console.log(`URL`, URL)
const Login = ({ setToggleLogin }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  }
  // This function is being used in two places. It can be extracted to a helpers.js file

  async function postFetch(user) {
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      .split("=")[1]; // Extract CSRF token from cookies
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": csrfToken, // Include CSRF token in request headers
      },
      credentials: "include", // Important: Include cookies in the request
      body: JSON.stringify(user),
    };

    try {
      const res = await fetch(`${URL}/api/auth/login`, options);
      const data = await res.json();

      if (!res.ok) {
        alert("Login failed");
        setUser({ username: "", password: "" });
        throw new Error("Registration failed");
      }
      await setToggleLogin(true);
      navigate("/teapots");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  // Login Function
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert("You must enter a username and password");
      return;
    }
    postFetch(user);
  }

  //Demo User Login Function
  async function handleDemoSignIn(e) {
    e.preventDefault();
    const user = { username: "demo", password: "password" };
    postFetch(user);
  }

  return (
    <div className="login-container">
      <button onClick={handleDemoSignIn}>Demo User</button>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="username">
            <input
              id="username"
              value={user.username}
              type="text"
              placeholder="username"
              autoComplete="username"
              onChange={handleChange}
            />
          </label>
        </section>
        <section>
          <label htmlFor="password">
            <input
              id="password"
              value={user.password}
              type="password"
              placeholder="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
          </label>
        </section>
        <section className="button-section">
          <button>Submit</button>
          <Link to={"/teapots"}>
            <button>Back</button>
          </Link>
        </section>
      </form>
      <p>
        No Account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
