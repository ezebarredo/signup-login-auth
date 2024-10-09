import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("test@test.com");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate();

  const usernameInput = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault;
    setUsername((_username: string) => e.target.value);
  };

  const passwordInput = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault;
    setPassword((_password: string) => e.target.value);
  };

  const loginPost = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`username: ${data.user.username}`);
      console.log(`token ${data.token}`);
      navigate("/user/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card">
        <a href="http://localhost:5175/user/signup">Sign Up</a>
        <h2>Login</h2>
        <form action="post">
          <p>Username</p>
          <input type="email" value={username} onInput={() => usernameInput} />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onInput={() => passwordInput}
          />
        </form>
        <br />
        <button onClick={() => loginPost()}>Login</button>
      </div>
    </>
  );
}
