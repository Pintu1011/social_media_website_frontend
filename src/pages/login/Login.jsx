import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss"

export const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Fast Social</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis soluta recusandae voluptate suscipit? At aut alias sit a labore!</p>
          <span>Don't you have an account</span>

          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password"/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Login;
