import { Link } from "react-router-dom";
import "./register.scss"

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Fast Social.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis soluta recusandae voluptate suscipit? At aut alias sit a labore!</p>
          <span>Do you have an account?</span>

          <Link to="/login">
          <button>Login</button>
          </Link>

        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register;

