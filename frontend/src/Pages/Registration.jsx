import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchableDropdown from '../Components/SearchableDropdown'
import { State, City } from 'country-state-city'

const Registration = () => {
  return (
    <div>
      <div className="register-area pt-120 mb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="form-wrapper">
          <div className="form-title">
            <h3>Register Account</h3>
            <span />
          </div>
          <div className="register-tab">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Candidate
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Hospital
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="firstname1">Hospital Name*</label>
                        <div className="input-area">
                          <img src="../../public/assets/images/icon/user-2.svg" alt="" />
                          <input
                            type="text"
                            id="firstname1"
                            name="firstname1"
                            placeholder="Mr. Robert"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="lastname1">Hospital Address*</label>
                        <div className="input-area">
                          <img src="../../public/assets/images/icon/user-2.svg" alt="" />
                          <input
                            type="text"
                            id="lastname1"
                            name="lastname1"
                            placeholder="Jonson"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="username">User Name*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/user-2.svg" alt="" />
                          <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="robertjonson"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="email">Email*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/email-2.svg" alt="" />
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="info@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="password">Password*</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                        />
                        <i className="bi bi-eye-slash" id="togglePassword" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label htmlFor="password2">Confirm Password*</label>
                        <input
                          type="password"
                          name="confirmpassword"
                          id="password2"
                          placeholder="Confirm Password"
                        />
                        <i className="bi bi-eye-slash" id="togglePassword2" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group two">
                          <input type="checkbox" id="html1" />
                          <label htmlFor="html1">
                            Here, I will agree company terms &amp; conditions.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button className="primry-btn-2" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <h6>
                      Already have an account? <Link to="/login"> Login</Link>{" "}
                      Here
                    </h6>
                    <div className="login-difarent-way">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <Link to="https://myaccount.google.com/">
                            <img src="assets/images/icon/google1.svg" alt="" />
                            Log in with Google
                          </Link>
                        </div>
                        <div className="col-md-6">
                          <Link to="https://www.facebook.com/">
                            <img
                              src="assets/images/icon/facebook1.svg"
                              alt=""
                            />
                            Log in with Facebook
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
                          <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <form>
                              <HospitalRegistration />
                            </form>
                          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Registration

function HospitalRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    state: "",
    city: "",
    zip: ""
  })
  const [hospitalTypeOptions] = useState([
    'General Hospital',
    'Eye Hospital',
    'Neuro Hospital',
    'Children Hospital',
    'Cardiac Hospital',
    'Diagnostic Center',
    'Other'
  ])
  const [typeOther, setTypeOther] = useState('')

  // dynamic states and cities using country-state-city
  const usStates = State.getStatesOfCountry('US') || []
  const stateNames = usStates.map(s => s.name)
  const selectedStateObj = usStates.find(s => s.name === form.state)
  const cities = selectedStateObj
    ? City.getCitiesOfState('US', selectedStateObj.isoCode).map(c => c.name)
    : []

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleDropdownChange = (name, val) => {
    setForm((s) => ({ ...s, [name]: val, ...(name === 'state' ? { city: '' } : {}) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // basic validation
    if (!form.name || !form.email) {
      alert('Please provide name and email')
      return
    }
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Hospital registration submitted', form)
    alert('Registration submitted (see console)')
  }

  return (
    <div>
      {/* follow FindJob layout: compact searchable fields */}
      <div className="row g-3 mb-25">
        <div className="col-lg-4 col-md-6">
          <div className="form-inner">
            <input
              type="text"
              placeholder="Hospital Name"
              value={form.name}
              name="name"
              onChange={handleChange}
              style={{ height: '60px', padding: '0 20px' }}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <SearchableDropdown
            options={hospitalTypeOptions}
            placeholder="Hospital Type"
            value={form.type || ''}
            onChange={(val) => handleDropdownChange('type', val)}
          />
          {form.type === 'Other' && (
            <div className="form-inner mt-2">
              <input
                type="text"
                placeholder="Specify hospital type"
                value={typeOther}
                onChange={(e) => setTypeOther(e.target.value)}
                style={{ height: '48px', padding: '0 12px' }}
              />
            </div>
          )}
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-inner">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              name="email"
              onChange={handleChange}
              style={{ height: '60px', padding: '0 20px' }}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-inner">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              name="password"
              onChange={handleChange}
              style={{ height: '60px', padding: '0 20px' }}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-inner">
            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              style={{ height: '60px', padding: '0 20px' }}
            />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-25">
        <div className="col-12">
          <div className="form-inner">
            <input
              type="text"
              placeholder="Address"
              value={form.address}
              name="address"
              onChange={handleChange}
              style={{ height: '60px', padding: '0 20px' }}
            />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-25">
        <div className="col-lg-3 col-md-6">
          <SearchableDropdown
            options={stateNames}
            placeholder="State"
            value={form.state}
            onChange={(val) => handleDropdownChange('state', val)}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <SearchableDropdown
            options={cities}
            placeholder="City"
            value={form.city}
            onChange={(val) => handleDropdownChange('city', val)}
            disabled={!form.state}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="form-inner">
            <input
              type="text"
              placeholder="Zipcode"
              value={form.zip}
              name="zip"
              onChange={handleChange}
              style={{ height: '60px', padding: '0 20px' }}
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-center">
          <button className="primry-btn-2 w-100" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
