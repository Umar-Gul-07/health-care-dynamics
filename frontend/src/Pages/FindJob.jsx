import React, { useState } from 'react'
import SearchableDropdown from '../Components/SearchableDropdown'
import { State, City } from 'country-state-city'


const FindJob = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [zipcode, setZipcode] = useState("");

  // Get all US states using the library
  const usStates = State.getStatesOfCountry('US');
  const stateNames = usStates.map(state => state.name);

  // We need the ISO code to look up cities for the selected state
  const selectedStateObj = usStates.find(state => state.name === selectedState);

  // Get all absolute cities for the specifically selected state
  const cities = selectedStateObj
    ? City.getCitiesOfState('US', selectedStateObj.isoCode).map(city => city.name)
    : [];

  return (
    <div>
      <div className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-center">
                <h1>Job Category</h1>
                <span />
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Job Category
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="category-listing-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4">
            <div className="col-lg-12">
              {/* 4-Column Search Form */}
              <div className="row g-4 mb-25">
                <div className="col-12">
                  <form>
                    <div className="row g-3">
                      <div className="col-lg-3 col-md-6">
                        <SearchableDropdown
                          options={stateNames}
                          placeholder="State"
                          value={selectedState}
                          onChange={(val) => {
                            setSelectedState(val);
                            setSelectedCity(""); // Reset city when state changes
                          }}
                        />
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <SearchableDropdown
                          options={cities}
                          placeholder="City"
                          value={selectedCity}
                          onChange={(val) => setSelectedCity(val)}
                          disabled={!selectedState}
                        />
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-inner">
                          <input
                            type="text"
                            placeholder="Zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-inner">
                          <input type="text" placeholder="Search.." />
                          <button className="primry-btn-2" type="submit">
                            <img src="assets/images/icon/search-category.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Showing Results Row */}
              <div className="row g-4 mb-25">
                <div className="col-12 d-flex align-items-center">
                  <p className="show-item">Showing results 10 in 200 jobs list</p>
                </div>
              </div>
              <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 cf justify-content-center mb-70">
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/account-finance.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>01</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Account &amp; Finance</a>
                      </h5>
                      <p>
                        Job Available: <span>44</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/technology.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>02</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Technology</a>
                      </h5>
                      <p>
                        Job Available: <span>04</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/medical.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>03</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Medical &amp; Nurse</a>
                      </h5>
                      <p>
                        Job Available: <span>33</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/marketing.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>04</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Marketing &amp; Sales</a>
                      </h5>
                      <p>
                        Job Available: <span>56</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/design-job.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>05</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Design Jobs</a>
                      </h5>
                      <p>
                        Job Available: <span>18 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/transportation.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>06</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Transportation</a>
                      </h5>
                      <p>
                        Job Available: <span>97</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/devlopment.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>07</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Development</a>
                      </h5>
                      <p>
                        Job Available: <span>67</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/receotionist.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>08</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Receptionist Job</a>
                      </h5>
                      <p>
                        Job Available: <span>55</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/non-profit-org.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>09</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Non-Profit Orag.</a>
                      </h5>
                      <p>
                        Job Available: <span>05</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/architect.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>10</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Architect Jobs</a>
                      </h5>
                      <p>
                        Job Available: <span>20</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/civil.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>11</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Civil Engineering</a>
                      </h5>
                      <p>
                        Job Available: <span>44</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/electrician.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>12</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Electrician/ Repair</a>
                      </h5>
                      <p>
                        Job Available: <span>04</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/mechanical.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>13</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Mechanical Engg.</a>
                      </h5>
                      <p>
                        Job Available: <span>33</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/insurance.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>14</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Insurance Jobs</a>
                      </h5>
                      <p>
                        Job Available: <span>56</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/design-job.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>15</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Web Applications</a>
                      </h5>
                      <p>
                        Job Available: <span>18</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/education.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>16</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Education</a>
                      </h5>
                      <p>
                        Job Available: <span>97</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/administration.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>17</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Administration</a>
                      </h5>
                      <p>
                        Job Available: <span>67</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/pharmaceutucals.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>18</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Pharmaceuticals</a>
                      </h5>
                      <p>
                        Job Available: <span>55</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/education.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>19</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Diploma Jobs</a>
                      </h5>
                      <p>
                        Job Available: <span>05</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src="assets/images/icon/car-driving.svg" alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>20</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <a href="job-listing">Car Driving</a>
                      </h5>
                      <p>
                        Job Available: <span>20</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <div className="pagination-area">
                    <nav aria-label="...">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1} />
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            02
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            03
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" />
                        </li>
                      </ul>
                    </nav>
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

export default FindJob
