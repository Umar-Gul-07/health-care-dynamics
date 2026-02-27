import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="login-area pt-120 mb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="form-wrapper">
          <div className="form-title">
            <h3>Log In Here!</h3>
            <span />
          </div>
          <form>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-inner mb-25">
                  <label htmlFor="email">Email*</label>
                  <div className="input-area">
                    <img src="../../public/assets/images/icon/email-2.svg" alt="" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="info@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <label htmlFor="email">Password*</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <i className="bi bi-eye-slash" id="togglePassword" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                  <div className="form-group">
                    <input type="checkbox" id="html" />
                    <label htmlFor="html">Remember Me</label>
                  </div>
                  <Link to="#" className="forgot-pass">
                    Forget Password?
                  </Link>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <button className="primry-btn-2" type="submit">
                    LogIn
                  </button>
                </div>
              </div>
              <h6>
                Don’t have an account? <Link to="/register">Sign Up</Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
