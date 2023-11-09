import { useState } from "react";
import "./Login.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /*{Setting user of userContext}*/
  const {setUser} = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({username,password})
  }
  return (
    <div className="login-form">
    <h1 className="heading">Please Login</h1>
      <input
        className="login-input"
        value={username}
        type="text"
        placeholder="Enter Username"
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input
        className="login-input"
        value={password}
        type="password"
        placeholder="Enter Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
