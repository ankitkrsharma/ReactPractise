import { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Registration Successful!");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="form-control">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="form-control">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;