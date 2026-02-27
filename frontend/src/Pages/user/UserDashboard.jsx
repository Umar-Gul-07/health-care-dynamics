import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      
        <div className="dashboard-inner">
          <div className="author-area">
            <div className="author-img">
              <img src="assets/images/bg/author1.png" alt="" />
            </div>
            <div className="author-content">
              <span>Hello, I’m</span>
              <h4>JACOLINE Frankly</h4>
            </div>
          </div>
          <div className="counter-area">
            <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single">
                  <div className="counter-icon">
                    <img src="assets/images/icon/tt-applied.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Total Applied</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">7</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single two">
                  <div className="counter-icon">
                    <img src="assets/images/icon/save-job.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Saved Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">3</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single three">
                  <div className="counter-icon">
                    <img src="assets/images/icon/massage.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Message</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">3</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single four">
                  <div className="counter-icon">
                    <img src="assets/images/icon/cv-review.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Review CV</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">15</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-wrapper">
            <h5 className="title">Current Applied Jobs:</h5>
            <div className="scroll-table">
              <table className="eg-table table category-table mb-0">
                <thead>
                  <tr>
                    <th>Job Tittle</th>
                    <th>Apply Date</th>
                    <th>Company</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Job Title">
                      <div className="company-info">
                        <div className="logo">
                          <img
                            src="assets/images/bg/company-logo/company-06.png"
                            alt=""
                          />
                        </div>
                        <div className="company-details">
                          <div className="top">
                            <h6>
                              <a href="job-details.html">
                                Senior UI/UX Designer
                              </a>
                            </h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />{" "}
                              1 days ago
                            </span>
                          </div>
                          <ul>
                            <li>
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                              New-York, USA
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $60-$90 /{" "}
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Apply Job">03/07/2022</td>
                    <td data-label="Company">
                      <a className="view-btn" href="company-details.html">
                        Tech.Bath Com...{" "}
                      </a>
                    </td>
                    <td data-label="Status">
                      <button className="eg-btn purple-btn">Viewed</button>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Job Title">
                      <div className="company-info">
                        <div className="logo">
                          <img
                            src="assets/images/bg/company-logo/company-02.png"
                            alt=""
                          />
                        </div>
                        <div className="company-details">
                          <div className="top">
                            <h6>
                              <a href="job-details.html">React JS Developer</a>
                            </h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />{" "}
                              1 days ago
                            </span>
                          </div>
                          <ul>
                            <li>
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                              Dhaka, Bangladesh
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $80-$100
                                / <span className="time">Per Hour</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Apply Job">07/07/2022</td>
                    <td data-label="Company">
                      <a className="view-btn" href="company-details.html">
                        Gangster Group
                      </a>
                    </td>
                    <td data-label="Status">
                      <button className="eg-btn yellow-btn">Interview</button>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Job Title">
                      <div className="company-info">
                        <div className="logo">
                          <img
                            src="assets/images/bg/company-logo/company-03.png"
                            alt=""
                          />
                        </div>
                        <div className="company-details">
                          <div className="top">
                            <h6>
                              <a href="job-details.html">WordPress Developer</a>
                            </h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />{" "}
                              2 days ago
                            </span>
                          </div>
                          <ul>
                            <li>
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                              West London, UK
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $30K-$40K
                                / <span className="time">Monthly</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Apply Job">10/07/2022</td>
                    <td data-label="Company">
                      <a className="view-btn" href="company-details.html">
                        Zoomly.Co Ltd
                      </a>
                    </td>
                    <td data-label="Status">
                      <button className="eg-btn orenge-btn">Canceled</button>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Job Title">
                      <div className="company-info">
                        <div className="logo">
                          <img
                            src="assets/images/bg/company-logo/company-04.png"
                            alt=""
                          />
                        </div>
                        <div className="company-details">
                          <div className="top">
                            <h6>
                              <a href="job-details.html">
                                Mern-Stack Developer
                              </a>
                            </h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />{" "}
                              1 week ago
                            </span>
                          </div>
                          <ul>
                            <li>
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                              New-York, USA
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $20-$50 /{" "}
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Apply Job">13/07/2022</td>
                    <td data-label="Company">
                      <a className="view-btn" href="company-details.html">
                        Marko-land Ltd
                      </a>
                    </td>
                    <td data-label="Status">
                      <button className="eg-btn purple-btn">Viewed</button>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Job Title">
                      <div className="company-info">
                        <div className="logo">
                          <img
                            src="assets/images/bg/company-logo/company-05.png"
                            alt=""
                          />
                        </div>
                        <div className="company-details">
                          <div className="top">
                            <h6>
                              <a href="job-details.html">PHP Developer</a>
                            </h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />{" "}
                              2 week ago
                            </span>
                          </div>
                          <ul>
                            <li>
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                              New-York, USA
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $40K-$60K
                                / <span className="time">Per Month</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Apply Job">18/08/2022</td>
                    <td data-label="Company">
                      <a className="view-btn" href="company-details.html">
                        Bistro.Tech Group
                      </a>
                    </td>
                    <td data-label="Status">
                      <button className="eg-btn green-btn">Success</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> 

     <div className="row">
      <div className="col-lg-12">
        <div className="featured-jobs-area">
          <div className="section-title">
            <h4>Featured Jobs:</h4>
          </div>
        </div>
      </div>
      <div className="swiper feature-slider2 swiper-initialized swiper-horizontal swiper-pointer-events">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-47499ee9daf351a4"
          aria-live="off"
          style={{
            transitionDuration: "0ms",
            transform: "translate3d(-2680px, 0px, 0px)"
          }}
        >
          <div
            className="swiper-slide swiper-slide-duplicate"
            role="group"
            aria-label="1 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={0}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-02.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">UI/UX Engineer</a>{" "}
                      <span>
                        Full Time, Remote
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">Norland Company</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Chicago,
                      Australia
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $90-$140 /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            role="group"
            aria-label="2 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={1}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-03.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">React JS Developer</a>{" "}
                      <span>
                        Full Time, Remote
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">UX.UI Company</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Dhaka, Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80K-$110K /{" "}
                      <span className="time">Per Month</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            role="group"
            aria-label="3 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={2}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-04.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">Receptionist</a>{" "}
                      <span>
                        Full Time, Part Time
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">Germaine Group Ltd</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> West London, Uk
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $50K-$60K /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-2.5 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 4 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-duplicate-next"
            role="group"
            aria-label="1 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={0}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-02.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">UI/UX Engineer</a>{" "}
                      <span>
                        Full Time, Remote
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">Norland Company</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Chicago,
                      Australia
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $90-$140 /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-prev"
            role="group"
            aria-label="2 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={1}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-03.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">React JS Developer</a>{" "}
                      <span>
                        Full Time, Remote
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">UX.UI Company</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Dhaka, Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80K-$110K /{" "}
                      <span className="time">Per Month</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="3 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={2}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-04.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">Receptionist</a>{" "}
                      <span>
                        Full Time, Part Time
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">Germaine Group Ltd</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> West London, Uk
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $50K-$60K /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-2.5 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 4 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-next"
            role="group"
            aria-label="1 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={0}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-02.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">UI/UX Engineer</a>{" "}
                      <span>
                        Full Time, Remote
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">Norland Company</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Chicago,
                      Australia
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $90-$140 /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            role="group"
            aria-label="2 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={1}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-03.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">React JS Developer</a>{" "}
                      <span>
                        Full Time, Remote
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">UX.UI Company</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Dhaka, Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80K-$110K /{" "}
                      <span className="time">Per Month</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
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
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            role="group"
            aria-label="3 / 3"
            style={{ width: 516, marginRight: 20 }}
            data-swiper-slide-index={2}
          >
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="assets/images/bg/company-logo/company-04.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <a href="job-details.html">Receptionist</a>{" "}
                      <span>
                        Full Time, Part Time
                        <span />
                      </span>
                    </h5>
                    <ul>
                      <li>
                        <a href="company-details.html">Germaine Group Ltd</a>
                      </li>
                      <li className="verified">
                        <img src="assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> West London, Uk
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $50K-$60K /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-2.5 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 4 February, 2023</span>
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
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
      </div>
      </div>
      
        
    </div>
 

  );
}

export default UserDashboard
