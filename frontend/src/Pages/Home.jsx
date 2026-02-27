import React from 'react'

const Home = () => {
  return (
    <>
      <div className="hero1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1>
                  Your Career’s <span>Opportunity.</span>
                </h1>
                <p>
                  <span>2400</span> Peoples are daily search in this portal,{" "}
                  <span>100</span> user added job portal!
                </p>
                <div className="counter-area">
                  <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                      <div className="counter-single">
                        <div className="counter-icon">
                          <img src="assets/images/icon/job2.svg" alt="image" />
                        </div>
                        <div className="coundown">
                          <p>Live Jobs</p>
                          <div className="d-flex align-items-center gap-2">
                            <h3 className="odometer">20223</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="counter-single">
                        <div className="counter-icon">
                          <img src="assets/images/icon/companies.svg" alt="image" />
                        </div>
                        <div className="coundown">
                          <p>Companies</p>
                          <div className="d-flex align-items-center gap-2">
                            <h3 className="odometer">803</h3>
                            <span>+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="counter-single">
                        <div className="counter-icon">
                          <img src="assets/images/icon/candidates.svg" alt="image" />
                        </div>
                        <div className="coundown">
                          <p>Candidates</p>
                          <div className="d-flex align-items-center gap-2">
                            <h3 className="odometer">500</h3>
                            <span>+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="counter-single">
                        <div className="counter-icon">
                          <img src="assets/images/icon/new-jobs.svg" alt="image" />
                        </div>
                        <div className="coundown">
                          <p>New Jobs</p>
                          <div className="d-flex align-items-center gap-2">
                            <h3 className="odometer">102</h3>
                            <span>+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-search-area">
                  <form>
                    <div className="form-inner job-title">
                      <input type="text" placeholder="Job Title" />
                    </div>
                    <div className="form-inner category">
                      <select className="select1">
                        <option value={0}>Category</option>
                        <option value={1}>UI/UX </option>
                        <option value={2}>Closed</option>
                        <option value={4}>Closed</option>
                        <option value={5}>Closed</option>
                      </select>
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primry-btn-2 ">
                        <img src="assets/images/icon/search-icon.svg" alt="" /> Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="home1-category pt-120 mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
              <div className="section-title1">
                <h2>
                  Trending Jobs <span>Category</span>
                </h2>
                <p>To choose your trending job dream &amp; to make future bright.</p>
              </div>
              <div className="explore-btn">
                <a href="category.html">
                  Explore More{" "}
                  <span>
                    <img src="assets/images/icon/explore-elliose.svg" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 cf justify-content-center">
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
                    <a href="job-listing1.html">Account &amp; Finance</a>
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
                    <a href="job-listing1.html">Technology</a>
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
                    <a href="job-listing1.html">Medical &amp; Nurse</a>
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
                    <a href="job-listing1.html">Marketing &amp; Sales</a>
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
                    <a href="job-listing1.html">Design Jobs</a>
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
                    <a href="job-listing1.html">Transportation</a>
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
                    <a href="job-listing1.html">Development</a>
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
                    <a href="job-listing1.html">Receptionist Job</a>
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
                    <a href="job-listing1.html">Non-Profit Orag.</a>
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
                    <a href="job-listing1.html">Architect Jobs</a>
                  </h5>
                  <p>
                    Job Available: <span>20</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


<div className="home1-featured-area mb-120">
  <div className="container">
    <div className="row mb-60">
      <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
        <div className="section-title1">
          <h2>
            Latest <span>Featured</span> Jobs
          </h2>
          <p>To choose your trending job dream &amp; to make future bright.</p>
        </div>
        <div className="explore-btn">
          <a href="job-listing1.html">
            Explore More{" "}
            <span>
              <img src="assets/images/icon/explore-elliose.svg" alt="" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-xl-4 col-lg-6">
        <div className="feature-card">
          <div className="company-area">
            <div className="logo">
              <img src="assets/images/bg/company-logo/company-01.png" alt="" />
            </div>
            <div className="company-details">
              <div className="name-location">
                <h5>
                  <a href="job-details.html">React JS Developer</a>
                </h5>
                <p>Full Time, Part Time</p>
              </div>
              <div className="bookmark">
                <i className="bi bi-bookmark" />
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Salary:</span> $80-$110 /{" "}
                  <span className="time">Per month</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Vacancy:</span>{" "}
                  <span> 07 Person (Both)</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Deadline:</span>{" "}
                  <span> 02 March, 2023</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="job-type-apply">
            <div className="apply-btn">
              <a href="job-details.html">
                <span>
                  <img src="assets/images/icon/apply-ellipse.svg" alt="" />
                </span>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6">
        <div className="feature-card">
          <div className="company-area">
            <div className="logo">
              <img src="assets/images/bg/company-logo/company-02.png" alt="" />
            </div>
            <div className="company-details">
              <div className="name-location">
                <h5>
                  <a href="job-details.html">Assistant Laboratorist</a>
                </h5>
                <p>Full Time, Part Time</p>
              </div>
              <div className="bookmark">
                <i className="bi bi-bookmark" />
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Salary:</span> $30-$40 /{" "}
                  <span className="time">Per month</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Vacancy:</span>{" "}
                  <span> 05 Person (Both)</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Deadline:</span>{" "}
                  <span> 02 March, 2023 </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="job-type-apply">
            <div className="apply-btn">
              <a href="job-details.html">
                <span>
                  <img src="assets/images/icon/apply-ellipse.svg" alt="" />
                </span>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6">
        <div className="feature-card">
          <div className="company-area">
            <div className="logo">
              <img src="assets/images/bg/company-logo/company-03.png" alt="" />
            </div>
            <div className="company-details">
              <div className="name-location">
                <h5>
                  <a href="job-details.html">Senior Receptionist</a>
                </h5>
                <p>Full Time, Part Time</p>
              </div>
              <div className="bookmark">
                <i className="bi bi-bookmark" />
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Salary:</span> $60-$90 /{" "}
                  <span className="time">Per month</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Vacancy:</span>{" "}
                  <span> 07 Person (Female)</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Deadline:</span>{" "}
                  <span> 03 March, 2023 </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="job-type-apply">
            <div className="apply-btn">
              <a href="job-details.html">
                <span>
                  <img src="assets/images/icon/apply-ellipse.svg" alt="" />
                </span>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6">
        <div className="feature-card">
          <div className="company-area">
            <div className="logo">
              <img src="assets/images/bg/company-logo/company-05.png" alt="" />
            </div>
            <div className="company-details">
              <div className="name-location">
                <h5>
                  <a href="job-details.html">Senior WordPress Develope</a>
                </h5>
                <p>Part Time, Remote</p>
              </div>
              <div className="bookmark">
                <i className="bi bi-bookmark" />
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Salary:</span> $60-$80 /{" "}
                  <span className="time">Per month</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Vacancy:</span>{" "}
                  <span> 03 Person (Male)</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Deadline:</span>{" "}
                  <span> 04 March, 2023 </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="job-type-apply">
            <div className="apply-btn">
              <a href="job-details.html">
                <span>
                  <img src="assets/images/icon/apply-ellipse.svg" alt="" />
                </span>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6">
        <div className="feature-card">
          <div className="company-area">
            <div className="logo">
              <img src="assets/images/bg/company-logo/company-06.png" alt="" />
            </div>
            <div className="company-details">
              <div className="name-location">
                <h5>
                  <a href="job-details.html">Manager (HR)</a>
                </h5>
                <p>Full Time, Part Time</p>
              </div>
              <div className="bookmark">
                <i className="bi bi-bookmark" />
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Salary:</span> $60-$76 /{" "}
                  <span className="time">Per month</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Vacancy:</span>{" "}
                  <span> 01 Person (Both)</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Deadline:</span>{" "}
                  <span> 05 March, 2023</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="job-type-apply">
            <div className="apply-btn">
              <a href="job-details.html">
                <span>
                  <img src="assets/images/icon/apply-ellipse.svg" alt="" />
                </span>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6">
        <div className="feature-card">
          <div className="company-area">
            <div className="logo">
              <img src="assets/images/bg/company-logo/company-04.png" alt="" />
            </div>
            <div className="company-details">
              <div className="name-location">
                <h5>
                  <a href="job-details.html">UI/UX Designer</a>
                </h5>
                <p>Full Time, Part Time</p>
              </div>
              <div className="bookmark">
                <i className="bi bi-bookmark" />
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Salary:</span> $60-$70 /{" "}
                  <span className="time">Per month</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Vacancy:</span>{" "}
                  <span> 03 Person (Both)</span>
                </p>
              </li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p>
                  <span className="title">Deadline:</span>{" "}
                  <span> 02 March, 2023</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="job-type-apply">
            <div className="apply-btn">
              <a href="job-details.html">
                <span>
                  <img src="assets/images/icon/apply-ellipse.svg" alt="" />
                </span>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="home1-work-process mb-120">
  <div className="container">
    <div className="row mb-60">
      <div className="col-12 d-flex justify-content-center">
        <div className="section-title1 text-center">
          <h2>
            JOBES Working <span>Process</span>
          </h2>
          <p>To choose your trending job dream &amp; to make future bright.</p>
        </div>
      </div>
    </div>
    <div className="row g-lg-4 gy-5 justify-content-center">
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="single-work-process one text-center">
          <div className="icon">
            <img src="assets/images/icon/account-create.svg" alt="" />
          </div>
          <div className="work-content">
            <h5>
              <a href="register.html">Account Create</a>
            </h5>
            <p>To create your account be confident &amp; safely.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="single-work-process two text-center">
          <div className="icon">
            <img src="assets/images/icon/create-resume.svg" alt="" />
          </div>
          <div className="work-content">
            <h5>
              <a href="edit-profile.html">Create Resume</a>
            </h5>
            <p>To create your account be confident &amp; safely.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="single-work-process one text-center">
          <div className="icon">
            <img src="assets/images/icon/job-find.svg" alt="" />
          </div>
          <div className="work-content">
            <h5>
              <a href="job-listing1.html">Find Jobs </a>
            </h5>
            <p>To create your account be confident &amp; safely.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="single-work-process two text-center">
          <div className="icon">
            <img src="assets/images/icon/job-apply.svg" alt="" />
          </div>
          <div className="work-content">
            <h5>
              <a href="job-listing1.html">Apply Jobs</a>
            </h5>
            <p>To create your account be confident &amp; safely.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="home1-location-area mb-120">
        <div className="container">
            <div className="row mb-60">
                <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
                    <div className="section-title1">
                        <h2>Get Dream With <span>Location</span></h2>
                        <p>To choose your trending job dream & to make future bright.</p>
                    </div>
                    <div className="swiper-btn1 d-flex align-items-center">
                        <div className="left-btn prev-1">
                            <img src="assets/images/icon/explore-elliose.svg" alt="" />
                        </div>
                        <div className="right-btn next-1">
                            <img src="assets/images/icon/explore-elliose.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="swiper location-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="location-card">
                                <div className="location-img">
                                    <img className="img-fluid" src="assets/images/bg/dhaka1.png" alt="" />
                                </div>
                                <div className="location-content text-center">
                                    <h5><a href="job-listing1.html"><img src="assets/images/icon/location.svg" alt="" />Dhaka, Bangladesh</a></h5>
                                    <p>Job Available: <span>2934</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="location-card">
                                <div className="location-img">
                                    <img className="img-fluid" src="assets/images/bg/newyork1.png" alt="" />
                                </div>
                                <div className="location-content text-center">
                                    <h5><a href="job-listing1.html"><img src="assets/images/icon/location.svg" alt="" />NewYork, USA</a></h5>
                                    <p>Job Available: <span>2186</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="location-card">
                                <div className="location-img">
                                    <img className="img-fluid" src="assets/images/bg/chicago.png" alt="" />
                                </div>
                                <div className="location-content text-center">
                                    <h5><a href="job-listing1.html"><img src="assets/images/icon/location.svg" alt="" />Chicago, Australia</a></h5>
                                    <p>Job Available: <span>5678</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="location-card">
                                <div className="location-img">
                                    <img className="img-fluid" src="assets/images/bg/sylhet.png" alt="" />
                                </div>
                                <div className="location-content text-center">
                                    <h5><a href="job-listing1.html"><img src="assets/images/icon/location.svg" alt="" />Sylhet, Bangladesh</a></h5>
                                    <p>Job Available: <span>1234</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



<div className="home1-review-area mb-120">
        <div className="container">
            <div className="row mb-60">
                <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
                    <div className="section-title1">
                        <h2>Trusted User <span>Reviews</span></h2>
                        <p>To choose your trending job dream & to make future bright.</p>
                    </div>
                    <div className="swiper-btn1 d-flex align-items-center">
                        <div className="left-btn prev-2">
                            <img src="assets/images/icon/explore-elliose.svg" alt="" />
                        </div>
                        <div className="right-btn next-2">
                            <img src="assets/images/icon/explore-elliose.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="swiper testimonial-slider1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="author-img">
                                    <img src="assets/images/bg/testimonial-author1.png" alt="" />
                                    <div className="quat-icon">
                                        <img src="assets/images/icon/quat-icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="author-review-area">
                                        <div className="author-area">
                                            <h5>Jacoline Frangly</h5>
                                            <span>React Developer</span>
                                        </div>
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-half"></i></li>
                                        </ul>
                                    </div>
                                    <p>On the other hand, we denounce with to the righteous indignation and dislike the men who are so beguiled to demoralized by the charms of pleasure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="author-img">
                                    <img src="assets/images/bg/testimonial-author2.png" alt="" />
                                    <div className="quat-icon">
                                        <img src="assets/images/icon/quat-icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="author-review-area">
                                        <div className="author-area">
                                            <h5>Jordan Miycol</h5>
                                            <span>UI/UX Engineer</span>
                                        </div>
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-half"></i></li>
                                        </ul>
                                    </div>
                                    <p>On the other hand, we denounce with to the righteous indignation and dislike the men who are so beguiled to demoralized by the charms of pleasure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



<div className="home1-trusted-company mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h5>Our Trusted Company</h5>
                    </div>
                    <div className="swiper trusted-company-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="company-logo">
                                    <img src="assets/images/bg/company-logo/trusted-company-01.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="company-logo">
                                    <img src="assets/images/bg/company-logo/trusted-company-02.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="company-logo">
                                    <img src="assets/images/bg/company-logo/trusted-company-03.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="company-logo">
                                    <img src="assets/images/bg/company-logo/trusted-company-04.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="company-logo">
                                    <img src="assets/images/bg/company-logo/trusted-company-05.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="company-logo">
                                    <img src="assets/images/bg/company-logo/trusted-company-06.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




<div className="home1-top-recruiters mb-120">
        <div className="container">
            <div className="row mb-60">
                <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
                    <div className="section-title1">
                        <h2>Our Top <span>Recruiters</span></h2>
                        <p>To choose your trending job dream & to make future bright.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="slick-wrapper">
                    <div id="slick1">
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-06.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Norland Company</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> New-York, USA</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 45 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>21</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-07.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Germaine Company</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Chicago, Australia</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 32 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>13</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-08.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Techman Digita</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Dhaka, Bangladesh</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 35 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>15</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-09.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Tario.Co Ltd</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Sylhet, Bangladesh</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 55 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>33</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-06.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Norland Company</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> New-York, USA</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 45 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>21</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-07.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Germaine Company</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Chicago, Australia</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 32 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>13</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-08.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Techman Digita</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Dhaka, Bangladesh</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 35 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>15</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-09.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Tario.Co Ltd</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Sylhet, Bangladesh</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 55 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>33</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-06.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Norland Company</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> New-York, USA</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 45 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>21</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-07.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Germaine Company</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Chicago, Australia</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 32 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>13</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-08.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Techman Digita</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Dhaka, Bangladesh</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 35 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>15</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="recruters-card">
                                <div className="company-area">
                                    <div className="logo">
                                        <img src="assets/images/bg/company-logo/company-09.png" alt="" />
                                    </div>
                                    <div className="name-location">
                                        <h5><a href="company-listing1.html">Tario.Co Ltd</a></h5>
                                        <p><img src="assets/images/icon/location.svg" alt="" /> Sylhet, Bangladesh</p>
                                        <p><img src="assets/images/icon/person-2.svg" alt="" /> 55 People</p>
                                    </div>
                                </div>
                                <div className="job-details-vacancies">
                                    <div className="apply-btn">
                                        <a href="company-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>View Details</a>
                                    </div>
                                    <div className="vacancies">
                                        <p>Vacancies: <span>33</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


<div className="home1-article-area mb-120">
  <div className="container">
    <div className="row mb-60">
      <div className="col-12 d-flex justify-content-center">
        <div className="section-title1 text-center">
          <h2>
            Portal Recent <span>Article</span>
          </h2>
          <p>To choose your trending job dream &amp; to make future bright.</p>
        </div>
      </div>
    </div>
    <div className="row g-lg-4 gy-5 justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="recent-article-wrap">
          <div className="recent-article-img">
            <img
              className="img-fluid"
              src="assets/images/blog/blog-img-01.png"
              alt=""
            />
            <div className="publish-area d-xl-none d-flex">
              <a href="blog-grid.html">
                <span>02</span>March
              </a>
            </div>
          </div>
          <div className="recent-article-content">
            <div className="recent-article-meta">
              <div className="publish-area">
                <a href="blog-grid.html">
                  <span>02</span>March
                </a>
              </div>
              <ul>
                <li>
                  <a href="blog-grid.html">
                    <img src="assets/images/icon/comment.svg" alt="" />
                    03 Comments
                  </a>
                </li>
                <li>
                  <a href="blog-grid.html">
                    <img src="assets/images/icon/user.svg" alt="" />
                    Mr. Jack Frank
                  </a>
                </li>
              </ul>
            </div>
            <h4>
              <a href="blog-details.html">
                To Make Your Smartness &amp; Catch Your Bright Dream.
              </a>
            </h4>
            <div className="explore-btn">
              <a href="blog-details.html">
                <span>
                  <img src="assets/images/icon/explore-elliose.svg" alt="" />
                </span>{" "}
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="recent-article-wrap">
          <div className="recent-article-img">
            <img
              className="img-fluid"
              src="assets/images/blog/blog-img-02.png"
              alt=""
            />
            <div className="publish-area d-xl-none d-flex">
              <a href="blog-grid.html">
                <span>04</span>March
              </a>
            </div>
          </div>
          <div className="recent-article-content">
            <div className="recent-article-meta">
              <div className="publish-area">
                <a href="blog-grid.html">
                  <span>04</span>March
                </a>
              </div>
              <ul>
                <li>
                  <a href="blog-grid.html">
                    <img src="assets/images/icon/comment.svg" alt="" />
                    11 Comments
                  </a>
                </li>
                <li>
                  <a href="blog-grid.html">
                    <img src="assets/images/icon/user.svg" alt="" />
                    Mr. Marko jack
                  </a>
                </li>
              </ul>
            </div>
            <h4>
              <a href="blog-details.html">
                Be Confident Your Dream &amp; Struggle About Your Bright Dream
              </a>
            </h4>
            <div className="explore-btn">
              <a href="blog-details.html">
                <span>
                  <img src="assets/images/icon/explore-elliose.svg" alt="" />
                </span>{" "}
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="recent-article-wrap">
          <div className="recent-article-img">
            <img
              className="img-fluid"
              src="assets/images/blog/blog-img-03.png"
              alt=""
            />
            <div className="publish-area d-xl-none d-flex">
              <a href="blog-grid.html">
                <span>05</span>March
              </a>
            </div>
          </div>
          <div className="recent-article-content">
            <div className="recent-article-meta">
              <div className="publish-area">
                <a href="blog-grid.html">
                  <span>05 </span>March
                </a>
              </div>
              <ul>
                <li>
                  <a href="blog-grid.html">
                    <img src="assets/images/icon/comment.svg" alt="" />
                    02 Comments
                  </a>
                </li>
                <li>
                  <a href="blog-grid.html">
                    <img src="assets/images/icon/user.svg" alt="" />
                    Srikanto Frank
                  </a>
                </li>
              </ul>
            </div>
            <h4>
              <a href="blog-details.html">
                To Make Your Smartness &amp; Catch Your Bright Dream.
              </a>
            </h4>
            <div className="explore-btn">
              <a href="blog-details.html">
                <span>
                  <img src="assets/images/icon/explore-elliose.svg" alt="" />
                </span>{" "}
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






    </>
  )
}

export default Home
