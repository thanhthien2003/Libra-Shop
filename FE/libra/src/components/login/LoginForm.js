import { Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm(){
    return(
        <>
         <div style={{background:'linear-gradient(90deg, rgba(208,243,245,1) 42%, rgba(14,233,242,1) 100%)',height: 100 + 'vh'}}>
        <div className="container-fluid">
          <div className="row">
          <Link to={"/"} style={{marginTop:5,marginLeft:10}} type="button" class="btn btn-dark">Back</Link>
          </div>
        </div>
        <div className="container" style={{marginTop: '50px'}}>
          <div className="row">
            <div className="login-box">
              <p>Login</p>
              <form>
                <div className="user-box">
                  <input required name type="text" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input required name type="password" />
                  <label>Password</label>
                </div>
                <a href="index.html">
                  <span />
                  <span />
                  <span />
                  <span />
                  Submit
                </a>
              </form>
              <p>Don't have an account? <a href className="a2">Sign up!</a></p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default LoginForm;