import React, { useState } from "react";


const LoginSignup = () => {
  const [formType, setFormType] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (formType === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setSignupData({ ...signupData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      alert("Login data submitted: " + JSON.stringify(loginData));
    } else {
      alert("Signup data submitted: " + JSON.stringify(signupData));
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", background: "#f6f6f6", padding: 30, borderRadius: 10 }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
        <button
          onClick={() => setFormType("login")}
          style={{
            background: formType === "login" ? "#1e90ff" : "#fff",
            color: formType === "login" ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: 5,
            marginRight: 10,
            padding: "10px 20px"
          }}>
          Login
        </button>
        <button
          onClick={() => setFormType("signup")}
          style={{
            background: formType === "signup" ? "#1e90ff" : "#fff",
            color: formType === "signup" ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: 5,
            padding: "10px 20px"
          }}>
          Signup
        </button>
      </div>
      {formType === "login" ? (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />
          </div>
          <button type="submit" style={{ padding: "7px 2px", fontSize: "0.98rem", minWidth: "90px", tabSize:"4px" }}>

            Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div>
            <label>Name:</label>
            <input
              name="name"
              type="text"
              value={signupData.name}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={signupData.email}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={signupData.password}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />
          </div>
          <button type="submit" style={{ background: "#1e90ff", color: "#fff", padding: "10px 20px", borderRadius: 5, border: "none" }}>
            Signup
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginSignup;