import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import { addJwtTokenToLocalStorage, infoAccountByJwtToken, loginUser } from "../../service/AccountService";
import { useEffect } from "react";

function LoginForm(){
  const navigate = useNavigate();
  const handleLogin = async (account) => {
       const res = await loginUser(account);
        addJwtTokenToLocalStorage(res.data.token)
        console.log(res);
        navigate("/");
        toast("Login success!")
  }
  const cannotLogin = () => {
    const res = infoAccountByJwtToken();
    console.log(res);
    if(res !== undefined){
      navigate("/");
    }
  }
  useEffect(()=> {
    cannotLogin()
  },[])
    return(
        <>
         <div>
        <div className="container-fluid">
          <div className="row">
          <Link to={"/"} style={{marginTop:5,marginLeft:10}} type="button" class="btn btn-dark">Back</Link>
          </div>
        </div>
        <div className="container" style={{marginTop: '50px'}}>
          <div className="row">
            <div className="login-box">
              <p>Login</p>
              <Formik
              initialValues={{
                userName:"",
                pass:""
              }}

              validationSchema={Yup.object({
                userName: Yup.string()
                    .required("Can not required"),
                    pass: Yup.string()
                    .required("Can not required")
            })}

            onSubmit={(values) => {
                  handleLogin(values)
            }}
              >
              <Form>
                <div className="user-box">
                  <Field  name="userName" id="userName" type="text" />
                  <label htmlFor="userName">Username</label>
                
                </div>
                <div className="user-box">
                  <Field  name="pass" id="pass" type="password" />
                  <label htmlFor="pass">Password</label>
                </div>
                <button className="btn" style={{backgroundColor:"whiteSmoke"}} type="submit">
                  <span />
                  <span />
                  <span />
                  <span />
                  Sign in !
                </button>
              </Form>
              </Formik>
              <p>Don't have an account? <a href className="a2">Sign up!</a></p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default LoginForm;