import React from 'react'

const PostJob = () => {
  return (
    <div>
      <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Post A Jobs</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Post A Jobs</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="job-post-area pt-120 mb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="form-wrapper">
          <form>
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title2">
                  <h5>Job Information:</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="jobtitle">Job Title*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/company-2.svg" alt="" />
                    <input
                      type="text"
                      id="jobtitle"
                      name="jobtitle"
                      placeholder="Senior UI/UX Engineer"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label>Job Category*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/category-2.svg" alt="" />
                    <select className="select1" style={{ display: "none" }}>
                      <option value={0}>UI/UX Designer</option>
                      <option value={1}>Font End Developer</option>
                      <option value={2}>Next Js</option>
                      <option value={4}>Laravel Devloper</option>
                    </select>
                    <div className="nice-select select1" tabIndex={0}>
                      <span className="current">UI/UX Designer</span>
                      <ul className="list">
                        <li data-value={0} className="option selected">
                          UI/UX Designer
                        </li>
                        <li data-value={1} className="option">
                          Font End Developer
                        </li>
                        <li data-value={2} className="option">
                          Next Js
                        </li>
                        <li data-value={4} className="option">
                          Laravel Devloper
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="vacancies">Vacancies*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/user-2.svg" alt="" />
                    <input
                      type="text"
                      id="vacancies"
                      name="vacancies"
                      placeholder="07 Person"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner">
                  <div className="salary-wrap">
                    <label className="label">Budget/Salary*</label>
                    <div className="salery-select-area">
                      <div className="single-salery">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="fixedPrice1"
                          name="showInputBox"
                          defaultValue="fixedPrice"
                          defaultChecked=""
                        />
                        <label htmlFor="fixedPrice1">Fixed Salary</label>
                        <br />
                      </div>
                      <div className="single-salery">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="rangePrice1"
                          name="showInputBox"
                          defaultValue="rangePrice"
                        />
                        <label htmlFor="rangePrice1">Salary Range</label>
                        <br />
                      </div>
                      <div className="single-salery">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="negotiable1"
                          name="showInputBox"
                          defaultValue="negotiable"
                        />
                        <label htmlFor="negotiable1">Negotiable</label>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="input-area  mb-25" id="fixedPrice">
                        <img src="assets/images/icon/salary-2.svg" alt="" />
                        <input
                          type="text"
                          name="job_fixed_price"
                          placeholder="Salary"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div id="rangePrice" style={{ display: "none" }}>
                        <div className="row">
                          <div className="col-lg-6 mb-25">
                            <div className="input-area">
                              <img
                                src="assets/images/icon/salary-2.svg"
                                alt=""
                              />
                              <input
                                type="text"
                                name="job_range_price_one"
                                placeholder="Max Salary"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-area">
                              <img
                                src="assets/images/icon/salary-2.svg"
                                alt=""
                              />
                              <input
                                type="text"
                                name="job_range_price_two"
                                placeholder="Min Salary"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label>Job Type*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/company-2.svg" alt="" />
                    <select className="select1" style={{ display: "none" }}>
                      <option value={0}>Full Time</option>
                      <option value={1}>Part Time</option>
                    </select>
                    <div className="nice-select select1" tabIndex={0}>
                      <span className="current">Full Time</span>
                      <ul className="list">
                        <li data-value={0} className="option selected">
                          Full Time
                        </li>
                        <li data-value={1} className="option">
                          Part Time
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="experiences">Experience Level*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/email-2.svg" alt="" />
                    <input
                      type="text"
                      id="experiences"
                      name="experiences"
                      placeholder="Type Experiences"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner select-jobtag mb-25">
                  <label>Job Tag*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/search-2.svg" alt="" />
                    {/* <select class="js-example-basic-multiple">
                                      </select> */}
                    <select
                      className="js-example-basic-multiple select2-hidden-accessible"
                      data-placeholder="Select an option"
                      data-select2-id="select2-data-1-xbu1"
                      multiple=""
                      tabIndex={-1}
                      aria-hidden="true"
                    ></select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-2-n8cv"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul
                            className="select2-selection__rendered"
                            id="select2-ax7a-container"
                          />
                          <span className="select2-search select2-search--inline">
                            <textarea
                              className="select2-search__field"
                              type="search"
                              tabIndex={0}
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="searchbox"
                              aria-autocomplete="list"
                              autoComplete="off"
                              aria-label="Search"
                              aria-describedby="select2-ax7a-container"
                              placeholder="Select an option"
                              style={{ width: "100%" }}
                              defaultValue={""}
                            />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="datepicker9">Deadline*</label>
                  <div className="input-area">
                    <img src="assets/images/icon/calender2.svg" alt="" />
                    <input
                      type="text"
                      id="datepicker9"
                      name="deadline"
                      placeholder="MM/DD/YY"
                      className="hasDatepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner mb-30">
                  <label htmlFor="summernote1">Job Description*</label>
                  <textarea
                    name="editordata"
                    id="summernote1"
                    placeholder="Something Write Yourself...."
                    style={{ display: "none" }}
                    defaultValue={""}
                  />
                  <div className="note-editor note-frame">
                    <div className="note-dropzone">
                      <div className="note-dropzone-message" />
                    </div>
                    <div className="note-toolbar" role="toolbar">
                      <div className="note-btn-group note-style">
                        <div className="note-btn-group">
                          <button
                            type="button"
                            className="note-btn dropdown-toggle"
                            tabIndex={-1}
                            data-toggle="dropdown"
                          >
                            <i className="note-icon-magic">
                              {" "}
                              <span className="note-icon-caret" />
                            </i>
                          </button>
                          <div
                            className="note-dropdown-menu dropdown-style"
                            role="list"
                            aria-label="Style"
                          >
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="p"
                              role="listitem"
                              aria-label="p"
                            >
                              <p>Normal</p>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="blockquote"
                              role="listitem"
                              aria-label="blockquote"
                            >
                              <blockquote>Quote</blockquote>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="pre"
                              role="listitem"
                              aria-label="pre"
                            >
                              <pre>Code</pre>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="h1"
                              role="listitem"
                              aria-label="h1"
                            >
                              <h1>Header 1</h1>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="h2"
                              role="listitem"
                              aria-label="h2"
                            >
                              <h2>Header 2</h2>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="h3"
                              role="listitem"
                              aria-label="h3"
                            >
                              <h3>Header 3</h3>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="h4"
                              role="listitem"
                              aria-label="h4"
                            >
                              <h4>Header 4</h4>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="h5"
                              role="listitem"
                              aria-label="h5"
                            >
                              <h5>Header 5</h5>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="h6"
                              role="listitem"
                              aria-label="h6"
                            >
                              <h6>Header 6</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="note-btn-group note-font">
                        <button
                          type="button"
                          className="note-btn note-btn-bold"
                          tabIndex={-1}
                        >
                          <i className="note-icon-bold" />
                        </button>
                        <button
                          type="button"
                          className="note-btn note-btn-underline"
                          tabIndex={-1}
                        >
                          <i className="note-icon-underline" />
                        </button>
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-eraser" />
                        </button>
                      </div>
                      <div className="note-btn-group note-fontname">
                        <div className="note-btn-group">
                          <button
                            type="button"
                            className="note-btn dropdown-toggle"
                            tabIndex={-1}
                            data-toggle="dropdown"
                          >
                            <span
                              className="note-current-fontname"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              sans-serif
                            </span>{" "}
                            <span className="note-icon-caret" />
                          </button>
                          <div
                            className="note-dropdown-menu note-check dropdown-fontname"
                            role="list"
                            aria-label="Font Family"
                          >
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Arial"
                              role="listitem"
                              aria-label="Arial"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Arial"' }}>
                                Arial
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Arial Black"
                              role="listitem"
                              aria-label="Arial Black"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Arial Black"' }}>
                                Arial Black
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Comic Sans MS"
                              role="listitem"
                              aria-label="Comic Sans MS"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Comic Sans MS"' }}>
                                Comic Sans MS
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Courier New"
                              role="listitem"
                              aria-label="Courier New"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Courier New"' }}>
                                Courier New
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Helvetica"
                              role="listitem"
                              aria-label="Helvetica"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Helvetica"' }}>
                                Helvetica
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Impact"
                              role="listitem"
                              aria-label="Impact"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Impact"' }}>
                                Impact
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Tahoma"
                              role="listitem"
                              aria-label="Tahoma"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Tahoma"' }}>
                                Tahoma
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Times New Roman"
                              role="listitem"
                              aria-label="Times New Roman"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Times New Roman"' }}>
                                Times New Roman
                              </span>
                            </a>
                            <a
                              className="note-dropdown-item"
                              href="#"
                              data-value="Verdana"
                              role="listitem"
                              aria-label="Verdana"
                            >
                              <i className="note-icon-menu-check" />{" "}
                              <span style={{ fontFamily: '"Verdana"' }}>
                                Verdana
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="note-btn-group note-color">
                        <div className="note-btn-group note-color note-color-all">
                          <button
                            type="button"
                            className="note-btn note-current-color-button"
                            tabIndex={-1}
                            data-backcolor="#FFFF00"
                            data-forecolor="#000000"
                          >
                            <i
                              className="note-icon-font note-recent-color"
                              style={{
                                backgroundColor: "rgb(255, 255, 0)",
                                color: "rgb(0, 0, 0)"
                              }}
                            />
                          </button>
                          <button
                            type="button"
                            className="note-btn dropdown-toggle"
                            tabIndex={-1}
                            data-toggle="dropdown"
                          >
                            {" "}
                            <span className="note-icon-caret" />
                          </button>
                          <div className="note-dropdown-menu" role="list">
                            <div className="note-palette">
                              <div className="note-palette-title">
                                Background Color
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="note-color-reset btn btn-light btn-default"
                                  data-event="backColor"
                                  data-value="transparent"
                                >
                                  Transparent
                                </button>
                              </div>
                              <div
                                className="note-holder"
                                data-event="backColor"
                              >
                                {/* back colors */}
                                <div className="note-color-palette">
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#000000" }}
                                      data-event="backColor"
                                      data-value="#000000"
                                      data-title="Black"
                                      aria-label="Black"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#424242" }}
                                      data-event="backColor"
                                      data-value="#424242"
                                      data-title="Tundora"
                                      aria-label="Tundora"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#636363" }}
                                      data-event="backColor"
                                      data-value="#636363"
                                      data-title="Dove Gray"
                                      aria-label="Dove Gray"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9C9C94" }}
                                      data-event="backColor"
                                      data-value="#9C9C94"
                                      data-title="Star Dust"
                                      aria-label="Star Dust"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CEC6CE" }}
                                      data-event="backColor"
                                      data-value="#CEC6CE"
                                      data-title="Pale Slate"
                                      aria-label="Pale Slate"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#EFEFEF" }}
                                      data-event="backColor"
                                      data-value="#EFEFEF"
                                      data-title="Gallery"
                                      aria-label="Gallery"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#F7F7F7" }}
                                      data-event="backColor"
                                      data-value="#F7F7F7"
                                      data-title="Alabaster"
                                      aria-label="Alabaster"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="White"
                                      aria-label="White"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FF0000" }}
                                      data-event="backColor"
                                      data-value="#FF0000"
                                      data-title="Red"
                                      aria-label="Red"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FF9C00" }}
                                      data-event="backColor"
                                      data-value="#FF9C00"
                                      data-title="Orange Peel"
                                      aria-label="Orange Peel"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFF00" }}
                                      data-event="backColor"
                                      data-value="#FFFF00"
                                      data-title="Yellow"
                                      aria-label="Yellow"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#00FF00" }}
                                      data-event="backColor"
                                      data-value="#00FF00"
                                      data-title="Green"
                                      aria-label="Green"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#00FFFF" }}
                                      data-event="backColor"
                                      data-value="#00FFFF"
                                      data-title="Cyan"
                                      aria-label="Cyan"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#0000FF" }}
                                      data-event="backColor"
                                      data-value="#0000FF"
                                      data-title="Blue"
                                      aria-label="Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9C00FF" }}
                                      data-event="backColor"
                                      data-value="#9C00FF"
                                      data-title="Electric Violet"
                                      aria-label="Electric Violet"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FF00FF" }}
                                      data-event="backColor"
                                      data-value="#FF00FF"
                                      data-title="Magenta"
                                      aria-label="Magenta"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#F7C6CE" }}
                                      data-event="backColor"
                                      data-value="#F7C6CE"
                                      data-title="Azalea"
                                      aria-label="Azalea"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFE7CE" }}
                                      data-event="backColor"
                                      data-value="#FFE7CE"
                                      data-title="Karry"
                                      aria-label="Karry"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFEFC6" }}
                                      data-event="backColor"
                                      data-value="#FFEFC6"
                                      data-title="Egg White"
                                      aria-label="Egg White"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#D6EFD6" }}
                                      data-event="backColor"
                                      data-value="#D6EFD6"
                                      data-title="Zanah"
                                      aria-label="Zanah"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CEDEE7" }}
                                      data-event="backColor"
                                      data-value="#CEDEE7"
                                      data-title="Botticelli"
                                      aria-label="Botticelli"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CEE7F7" }}
                                      data-event="backColor"
                                      data-value="#CEE7F7"
                                      data-title="Tropical Blue"
                                      aria-label="Tropical Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#D6D6E7" }}
                                      data-event="backColor"
                                      data-value="#D6D6E7"
                                      data-title="Mischka"
                                      aria-label="Mischka"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E7D6DE" }}
                                      data-event="backColor"
                                      data-value="#E7D6DE"
                                      data-title="Twilight"
                                      aria-label="Twilight"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E79C9C" }}
                                      data-event="backColor"
                                      data-value="#E79C9C"
                                      data-title="Tonys Pink"
                                      aria-label="Tonys Pink"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFC69C" }}
                                      data-event="backColor"
                                      data-value="#FFC69C"
                                      data-title="Peach Orange"
                                      aria-label="Peach Orange"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFE79C" }}
                                      data-event="backColor"
                                      data-value="#FFE79C"
                                      data-title="Cream Brulee"
                                      aria-label="Cream Brulee"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#B5D6A5" }}
                                      data-event="backColor"
                                      data-value="#B5D6A5"
                                      data-title="Sprout"
                                      aria-label="Sprout"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#A5C6CE" }}
                                      data-event="backColor"
                                      data-value="#A5C6CE"
                                      data-title="Casper"
                                      aria-label="Casper"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9CC6EF" }}
                                      data-event="backColor"
                                      data-value="#9CC6EF"
                                      data-title="Perano"
                                      aria-label="Perano"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#B5A5D6" }}
                                      data-event="backColor"
                                      data-value="#B5A5D6"
                                      data-title="Cold Purple"
                                      aria-label="Cold Purple"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#D6A5BD" }}
                                      data-event="backColor"
                                      data-value="#D6A5BD"
                                      data-title="Careys Pink"
                                      aria-label="Careys Pink"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E76363" }}
                                      data-event="backColor"
                                      data-value="#E76363"
                                      data-title="Mandy"
                                      aria-label="Mandy"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#F7AD6B" }}
                                      data-event="backColor"
                                      data-value="#F7AD6B"
                                      data-title="Rajah"
                                      aria-label="Rajah"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFD663" }}
                                      data-event="backColor"
                                      data-value="#FFD663"
                                      data-title="Dandelion"
                                      aria-label="Dandelion"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#94BD7B" }}
                                      data-event="backColor"
                                      data-value="#94BD7B"
                                      data-title="Olivine"
                                      aria-label="Olivine"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#73A5AD" }}
                                      data-event="backColor"
                                      data-value="#73A5AD"
                                      data-title="Gulf Stream"
                                      aria-label="Gulf Stream"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#6BADDE" }}
                                      data-event="backColor"
                                      data-value="#6BADDE"
                                      data-title="Viking"
                                      aria-label="Viking"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#8C7BC6" }}
                                      data-event="backColor"
                                      data-value="#8C7BC6"
                                      data-title="Blue Marguerite"
                                      aria-label="Blue Marguerite"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#C67BA5" }}
                                      data-event="backColor"
                                      data-value="#C67BA5"
                                      data-title="Puce"
                                      aria-label="Puce"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CE0000" }}
                                      data-event="backColor"
                                      data-value="#CE0000"
                                      data-title="Guardsman Red"
                                      aria-label="Guardsman Red"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E79439" }}
                                      data-event="backColor"
                                      data-value="#E79439"
                                      data-title="Fire Bush"
                                      aria-label="Fire Bush"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#EFC631" }}
                                      data-event="backColor"
                                      data-value="#EFC631"
                                      data-title="Golden Dream"
                                      aria-label="Golden Dream"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#6BA54A" }}
                                      data-event="backColor"
                                      data-value="#6BA54A"
                                      data-title="Chelsea Cucumber"
                                      aria-label="Chelsea Cucumber"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#4A7B8C" }}
                                      data-event="backColor"
                                      data-value="#4A7B8C"
                                      data-title="Smalt Blue"
                                      aria-label="Smalt Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#3984C6" }}
                                      data-event="backColor"
                                      data-value="#3984C6"
                                      data-title="Boston Blue"
                                      aria-label="Boston Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#634AA5" }}
                                      data-event="backColor"
                                      data-value="#634AA5"
                                      data-title="Butterfly Bush"
                                      aria-label="Butterfly Bush"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#A54A7B" }}
                                      data-event="backColor"
                                      data-value="#A54A7B"
                                      data-title="Cadillac"
                                      aria-label="Cadillac"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9C0000" }}
                                      data-event="backColor"
                                      data-value="#9C0000"
                                      data-title="Sangria"
                                      aria-label="Sangria"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#B56308" }}
                                      data-event="backColor"
                                      data-value="#B56308"
                                      data-title="Mai Tai"
                                      aria-label="Mai Tai"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#BD9400" }}
                                      data-event="backColor"
                                      data-value="#BD9400"
                                      data-title="Buddha Gold"
                                      aria-label="Buddha Gold"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#397B21" }}
                                      data-event="backColor"
                                      data-value="#397B21"
                                      data-title="Forest Green"
                                      aria-label="Forest Green"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#104A5A" }}
                                      data-event="backColor"
                                      data-value="#104A5A"
                                      data-title="Eden"
                                      aria-label="Eden"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#085294" }}
                                      data-event="backColor"
                                      data-value="#085294"
                                      data-title="Venice Blue"
                                      aria-label="Venice Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#311873" }}
                                      data-event="backColor"
                                      data-value="#311873"
                                      data-title="Meteorite"
                                      aria-label="Meteorite"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#731842" }}
                                      data-event="backColor"
                                      data-value="#731842"
                                      data-title="Claret"
                                      aria-label="Claret"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#630000" }}
                                      data-event="backColor"
                                      data-value="#630000"
                                      data-title="Rosewood"
                                      aria-label="Rosewood"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#7B3900" }}
                                      data-event="backColor"
                                      data-value="#7B3900"
                                      data-title="Cinnamon"
                                      aria-label="Cinnamon"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#846300" }}
                                      data-event="backColor"
                                      data-value="#846300"
                                      data-title="Olive"
                                      aria-label="Olive"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#295218" }}
                                      data-event="backColor"
                                      data-value="#295218"
                                      data-title="Parsley"
                                      aria-label="Parsley"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#083139" }}
                                      data-event="backColor"
                                      data-value="#083139"
                                      data-title="Tiber"
                                      aria-label="Tiber"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#003163" }}
                                      data-event="backColor"
                                      data-value="#003163"
                                      data-title="Midnight Blue"
                                      aria-label="Midnight Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#21104A" }}
                                      data-event="backColor"
                                      data-value="#21104A"
                                      data-title="Valentino"
                                      aria-label="Valentino"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#4A1031" }}
                                      data-event="backColor"
                                      data-value="#4A1031"
                                      data-title="Loulou"
                                      aria-label="Loulou"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="note-color-select btn btn-light btn-default"
                                  data-event="openPalette"
                                  data-value="backColorPicker"
                                >
                                  Select
                                </button>
                                <input
                                  type="color"
                                  id="backColorPicker"
                                  className="note-btn note-color-select-btn"
                                  defaultValue="#FFFF00"
                                  data-event="backColorPalette"
                                />
                              </div>
                              <div
                                className="note-holder-custom"
                                id="backColorPalette"
                                data-event="backColor"
                              >
                                <div className="note-color-palette">
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="backColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="note-palette">
                              <div className="note-palette-title">
                                Text Color
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="note-color-reset btn btn-light btn-default"
                                  data-event="removeFormat"
                                  data-value="foreColor"
                                >
                                  Reset to default
                                </button>
                              </div>
                              <div
                                className="note-holder"
                                data-event="foreColor"
                              >
                                {/* fore colors */}
                                <div className="note-color-palette">
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#000000" }}
                                      data-event="foreColor"
                                      data-value="#000000"
                                      data-title="Black"
                                      aria-label="Black"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#424242" }}
                                      data-event="foreColor"
                                      data-value="#424242"
                                      data-title="Tundora"
                                      aria-label="Tundora"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#636363" }}
                                      data-event="foreColor"
                                      data-value="#636363"
                                      data-title="Dove Gray"
                                      aria-label="Dove Gray"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9C9C94" }}
                                      data-event="foreColor"
                                      data-value="#9C9C94"
                                      data-title="Star Dust"
                                      aria-label="Star Dust"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CEC6CE" }}
                                      data-event="foreColor"
                                      data-value="#CEC6CE"
                                      data-title="Pale Slate"
                                      aria-label="Pale Slate"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#EFEFEF" }}
                                      data-event="foreColor"
                                      data-value="#EFEFEF"
                                      data-title="Gallery"
                                      aria-label="Gallery"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#F7F7F7" }}
                                      data-event="foreColor"
                                      data-value="#F7F7F7"
                                      data-title="Alabaster"
                                      aria-label="Alabaster"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="White"
                                      aria-label="White"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FF0000" }}
                                      data-event="foreColor"
                                      data-value="#FF0000"
                                      data-title="Red"
                                      aria-label="Red"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FF9C00" }}
                                      data-event="foreColor"
                                      data-value="#FF9C00"
                                      data-title="Orange Peel"
                                      aria-label="Orange Peel"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFF00" }}
                                      data-event="foreColor"
                                      data-value="#FFFF00"
                                      data-title="Yellow"
                                      aria-label="Yellow"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#00FF00" }}
                                      data-event="foreColor"
                                      data-value="#00FF00"
                                      data-title="Green"
                                      aria-label="Green"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#00FFFF" }}
                                      data-event="foreColor"
                                      data-value="#00FFFF"
                                      data-title="Cyan"
                                      aria-label="Cyan"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#0000FF" }}
                                      data-event="foreColor"
                                      data-value="#0000FF"
                                      data-title="Blue"
                                      aria-label="Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9C00FF" }}
                                      data-event="foreColor"
                                      data-value="#9C00FF"
                                      data-title="Electric Violet"
                                      aria-label="Electric Violet"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FF00FF" }}
                                      data-event="foreColor"
                                      data-value="#FF00FF"
                                      data-title="Magenta"
                                      aria-label="Magenta"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#F7C6CE" }}
                                      data-event="foreColor"
                                      data-value="#F7C6CE"
                                      data-title="Azalea"
                                      aria-label="Azalea"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFE7CE" }}
                                      data-event="foreColor"
                                      data-value="#FFE7CE"
                                      data-title="Karry"
                                      aria-label="Karry"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFEFC6" }}
                                      data-event="foreColor"
                                      data-value="#FFEFC6"
                                      data-title="Egg White"
                                      aria-label="Egg White"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#D6EFD6" }}
                                      data-event="foreColor"
                                      data-value="#D6EFD6"
                                      data-title="Zanah"
                                      aria-label="Zanah"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CEDEE7" }}
                                      data-event="foreColor"
                                      data-value="#CEDEE7"
                                      data-title="Botticelli"
                                      aria-label="Botticelli"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CEE7F7" }}
                                      data-event="foreColor"
                                      data-value="#CEE7F7"
                                      data-title="Tropical Blue"
                                      aria-label="Tropical Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#D6D6E7" }}
                                      data-event="foreColor"
                                      data-value="#D6D6E7"
                                      data-title="Mischka"
                                      aria-label="Mischka"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E7D6DE" }}
                                      data-event="foreColor"
                                      data-value="#E7D6DE"
                                      data-title="Twilight"
                                      aria-label="Twilight"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E79C9C" }}
                                      data-event="foreColor"
                                      data-value="#E79C9C"
                                      data-title="Tonys Pink"
                                      aria-label="Tonys Pink"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFC69C" }}
                                      data-event="foreColor"
                                      data-value="#FFC69C"
                                      data-title="Peach Orange"
                                      aria-label="Peach Orange"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFE79C" }}
                                      data-event="foreColor"
                                      data-value="#FFE79C"
                                      data-title="Cream Brulee"
                                      aria-label="Cream Brulee"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#B5D6A5" }}
                                      data-event="foreColor"
                                      data-value="#B5D6A5"
                                      data-title="Sprout"
                                      aria-label="Sprout"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#A5C6CE" }}
                                      data-event="foreColor"
                                      data-value="#A5C6CE"
                                      data-title="Casper"
                                      aria-label="Casper"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9CC6EF" }}
                                      data-event="foreColor"
                                      data-value="#9CC6EF"
                                      data-title="Perano"
                                      aria-label="Perano"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#B5A5D6" }}
                                      data-event="foreColor"
                                      data-value="#B5A5D6"
                                      data-title="Cold Purple"
                                      aria-label="Cold Purple"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#D6A5BD" }}
                                      data-event="foreColor"
                                      data-value="#D6A5BD"
                                      data-title="Careys Pink"
                                      aria-label="Careys Pink"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E76363" }}
                                      data-event="foreColor"
                                      data-value="#E76363"
                                      data-title="Mandy"
                                      aria-label="Mandy"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#F7AD6B" }}
                                      data-event="foreColor"
                                      data-value="#F7AD6B"
                                      data-title="Rajah"
                                      aria-label="Rajah"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFD663" }}
                                      data-event="foreColor"
                                      data-value="#FFD663"
                                      data-title="Dandelion"
                                      aria-label="Dandelion"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#94BD7B" }}
                                      data-event="foreColor"
                                      data-value="#94BD7B"
                                      data-title="Olivine"
                                      aria-label="Olivine"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#73A5AD" }}
                                      data-event="foreColor"
                                      data-value="#73A5AD"
                                      data-title="Gulf Stream"
                                      aria-label="Gulf Stream"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#6BADDE" }}
                                      data-event="foreColor"
                                      data-value="#6BADDE"
                                      data-title="Viking"
                                      aria-label="Viking"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#8C7BC6" }}
                                      data-event="foreColor"
                                      data-value="#8C7BC6"
                                      data-title="Blue Marguerite"
                                      aria-label="Blue Marguerite"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#C67BA5" }}
                                      data-event="foreColor"
                                      data-value="#C67BA5"
                                      data-title="Puce"
                                      aria-label="Puce"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#CE0000" }}
                                      data-event="foreColor"
                                      data-value="#CE0000"
                                      data-title="Guardsman Red"
                                      aria-label="Guardsman Red"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#E79439" }}
                                      data-event="foreColor"
                                      data-value="#E79439"
                                      data-title="Fire Bush"
                                      aria-label="Fire Bush"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#EFC631" }}
                                      data-event="foreColor"
                                      data-value="#EFC631"
                                      data-title="Golden Dream"
                                      aria-label="Golden Dream"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#6BA54A" }}
                                      data-event="foreColor"
                                      data-value="#6BA54A"
                                      data-title="Chelsea Cucumber"
                                      aria-label="Chelsea Cucumber"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#4A7B8C" }}
                                      data-event="foreColor"
                                      data-value="#4A7B8C"
                                      data-title="Smalt Blue"
                                      aria-label="Smalt Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#3984C6" }}
                                      data-event="foreColor"
                                      data-value="#3984C6"
                                      data-title="Boston Blue"
                                      aria-label="Boston Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#634AA5" }}
                                      data-event="foreColor"
                                      data-value="#634AA5"
                                      data-title="Butterfly Bush"
                                      aria-label="Butterfly Bush"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#A54A7B" }}
                                      data-event="foreColor"
                                      data-value="#A54A7B"
                                      data-title="Cadillac"
                                      aria-label="Cadillac"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#9C0000" }}
                                      data-event="foreColor"
                                      data-value="#9C0000"
                                      data-title="Sangria"
                                      aria-label="Sangria"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#B56308" }}
                                      data-event="foreColor"
                                      data-value="#B56308"
                                      data-title="Mai Tai"
                                      aria-label="Mai Tai"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#BD9400" }}
                                      data-event="foreColor"
                                      data-value="#BD9400"
                                      data-title="Buddha Gold"
                                      aria-label="Buddha Gold"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#397B21" }}
                                      data-event="foreColor"
                                      data-value="#397B21"
                                      data-title="Forest Green"
                                      aria-label="Forest Green"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#104A5A" }}
                                      data-event="foreColor"
                                      data-value="#104A5A"
                                      data-title="Eden"
                                      aria-label="Eden"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#085294" }}
                                      data-event="foreColor"
                                      data-value="#085294"
                                      data-title="Venice Blue"
                                      aria-label="Venice Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#311873" }}
                                      data-event="foreColor"
                                      data-value="#311873"
                                      data-title="Meteorite"
                                      aria-label="Meteorite"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#731842" }}
                                      data-event="foreColor"
                                      data-value="#731842"
                                      data-title="Claret"
                                      aria-label="Claret"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#630000" }}
                                      data-event="foreColor"
                                      data-value="#630000"
                                      data-title="Rosewood"
                                      aria-label="Rosewood"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#7B3900" }}
                                      data-event="foreColor"
                                      data-value="#7B3900"
                                      data-title="Cinnamon"
                                      aria-label="Cinnamon"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#846300" }}
                                      data-event="foreColor"
                                      data-value="#846300"
                                      data-title="Olive"
                                      aria-label="Olive"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#295218" }}
                                      data-event="foreColor"
                                      data-value="#295218"
                                      data-title="Parsley"
                                      aria-label="Parsley"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#083139" }}
                                      data-event="foreColor"
                                      data-value="#083139"
                                      data-title="Tiber"
                                      aria-label="Tiber"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#003163" }}
                                      data-event="foreColor"
                                      data-value="#003163"
                                      data-title="Midnight Blue"
                                      aria-label="Midnight Blue"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#21104A" }}
                                      data-event="foreColor"
                                      data-value="#21104A"
                                      data-title="Valentino"
                                      aria-label="Valentino"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#4A1031" }}
                                      data-event="foreColor"
                                      data-value="#4A1031"
                                      data-title="Loulou"
                                      aria-label="Loulou"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="note-color-select btn btn-light btn-default"
                                  data-event="openPalette"
                                  data-value="foreColorPicker"
                                >
                                  Select
                                </button>
                                <input
                                  type="color"
                                  id="foreColorPicker"
                                  className="note-btn note-color-select-btn"
                                  defaultValue="#000000"
                                  data-event="foreColorPalette"
                                />
                              </div>
                              <div
                                className="note-holder-custom"
                                id="foreColorPalette"
                                data-event="foreColor"
                              >
                                <div className="note-color-palette">
                                  <div className="note-color-row">
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="note-btn note-color-btn"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                      data-event="foreColor"
                                      data-value="#FFFFFF"
                                      data-title="#FFFFFF"
                                      aria-label="#FFFFFF"
                                      data-toggle="button"
                                      tabIndex={-1}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="note-btn-group note-para">
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-unorderedlist" />
                        </button>
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-orderedlist" />
                        </button>
                        <div className="note-btn-group">
                          <button
                            type="button"
                            className="note-btn dropdown-toggle"
                            tabIndex={-1}
                            data-toggle="dropdown"
                          >
                            <i className="note-icon-align-left">
                              {" "}
                              <span className="note-icon-caret" />
                            </i>
                          </button>
                          <div className="note-dropdown-menu" role="list">
                            <div className="note-btn-group note-align">
                              <button
                                type="button"
                                className="note-btn"
                                tabIndex={-1}
                              >
                                <i className="note-icon-align-left" />
                              </button>
                              <button
                                type="button"
                                className="note-btn"
                                tabIndex={-1}
                              >
                                <i className="note-icon-align-center" />
                              </button>
                              <button
                                type="button"
                                className="note-btn"
                                tabIndex={-1}
                              >
                                <i className="note-icon-align-right" />
                              </button>
                              <button
                                type="button"
                                className="note-btn"
                                tabIndex={-1}
                              >
                                <i className="note-icon-align-justify" />
                              </button>
                            </div>
                            <div className="note-btn-group note-list">
                              <button
                                type="button"
                                className="note-btn"
                                tabIndex={-1}
                              >
                                <i className="note-icon-align-outdent" />
                              </button>
                              <button
                                type="button"
                                className="note-btn"
                                tabIndex={-1}
                              >
                                <i className="note-icon-align-indent" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="note-btn-group note-table">
                        <div className="note-btn-group">
                          <button
                            type="button"
                            className="note-btn dropdown-toggle"
                            tabIndex={-1}
                            data-toggle="dropdown"
                          >
                            <i className="note-icon-table">
                              {" "}
                              <span className="note-icon-caret" />
                            </i>
                          </button>
                          <div
                            className="note-dropdown-menu note-table"
                            role="list"
                            aria-label="Table"
                          >
                            <div className="note-dimension-picker">
                              <div
                                className="note-dimension-picker-mousecatcher"
                                data-event="insertTable"
                                data-value="1x1"
                                style={{ width: "10em", height: "10em" }}
                              />
                              <div className="note-dimension-picker-highlighted" />
                              <div className="note-dimension-picker-unhighlighted" />
                            </div>
                            <div className="note-dimension-display">1 x 1</div>
                          </div>
                        </div>
                      </div>
                      <div className="note-btn-group note-insert">
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-link" />
                        </button>
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-picture" />
                        </button>
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-video" />
                        </button>
                      </div>
                      <div className="note-btn-group note-view">
                        <button
                          type="button"
                          className="note-btn btn-fullscreen note-codeview-keep"
                          tabIndex={-1}
                        >
                          <i className="note-icon-arrows-alt" />
                        </button>
                        <button
                          type="button"
                          className="note-btn btn-codeview note-codeview-keep"
                          tabIndex={-1}
                        >
                          <i className="note-icon-code" />
                        </button>
                        <button
                          type="button"
                          className="note-btn"
                          tabIndex={-1}
                        >
                          <i className="note-icon-question" />
                        </button>
                      </div>
                    </div>
                    <div className="note-editing-area">
                      <div className="note-handle">
                        <div className="note-control-selection">
                          <div className="note-control-selection-bg" />
                          <div className="note-control-holder note-control-nw" />
                          <div className="note-control-holder note-control-ne" />
                          <div className="note-control-holder note-control-sw" />
                          <div className="note-control-sizing note-control-se" />
                          <div className="note-control-selection-info" />
                        </div>
                      </div>
                      <textarea
                        className="note-codable"
                        aria-multiline="true"
                        defaultValue={""}
                      />
                      <div
                        className="note-editable"
                        contentEditable="true"
                        role="textbox"
                        aria-multiline="true"
                        spellCheck="true"
                        autoCorrect="true"
                      >
                        <p>
                          <br />
                        </p>
                      </div>
                    </div>
                    <output
                      className="note-status-output"
                      role="status"
                      aria-live="polite"
                    />
                    <div className="note-statusbar" role="status">
                      <div className="note-resizebar" aria-label="resize">
                        <div className="note-icon-bar" />
                        <div className="note-icon-bar" />
                        <div className="note-icon-bar" />
                      </div>
                    </div>
                    <div
                      className="note-modal link-dialog"
                      aria-hidden="false"
                      tabIndex={-1}
                      role="dialog"
                      aria-label="Insert Link"
                    >
                      <div className="note-modal-content">
                        <div className="note-modal-header">
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            <i className="note-icon-close" />
                          </button>
                          <h4 className="note-modal-title">Insert Link</h4>
                        </div>
                        <div className="note-modal-body">
                          <div className="form-group note-form-group">
                            <label
                              htmlFor="note-dialog-link-txt-17721367358671"
                              className="note-form-label"
                            >
                              Text to display
                            </label>
                            <input
                              id="note-dialog-link-txt-17721367358671"
                              className="note-link-text form-control note-form-control note-input"
                              type="text"
                            />
                          </div>
                          <div className="form-group note-form-group">
                            <label
                              htmlFor="note-dialog-link-url-17721367358671"
                              className="note-form-label"
                            >
                              To what URL should this link go?
                            </label>
                            <input
                              id="note-dialog-link-url-17721367358671"
                              className="note-link-url form-control note-form-control note-input"
                              type="text"
                              defaultValue="http://"
                            />
                          </div>
                          <div className="checkbox sn-checkbox-open-in-new-window">
                            <label>
                              <input
                                role="checkbox"
                                type="checkbox"
                                defaultChecked=""
                                aria-checked="true"
                              />
                              Open in new window
                            </label>
                          </div>
                          <div className="checkbox sn-checkbox-use-protocol">
                            <label>
                              <input
                                role="checkbox"
                                type="checkbox"
                                defaultChecked=""
                                aria-checked="true"
                              />
                              Use default protocol
                            </label>
                          </div>
                        </div>
                        <div className="note-modal-footer">
                          <input
                            type="button"
                            href="#"
                            className="btn btn-primary note-btn note-btn-primary note-link-btn"
                            defaultValue="Insert Link"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="note-popover bottom note-link-popover"
                      style={{ display: "none" }}
                    >
                      <div className="note-popover-arrow" />
                      <div className="popover-content note-children-container">
                        <span>
                          <a target="_blank" />
                          &nbsp;
                        </span>
                        <div className="note-btn-group note-link">
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-link" />
                          </button>
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-chain-broken" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="note-modal"
                      aria-hidden="false"
                      tabIndex={-1}
                      role="dialog"
                      aria-label="Insert Image"
                    >
                      <div className="note-modal-content">
                        <div className="note-modal-header">
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            <i className="note-icon-close" />
                          </button>
                          <h4 className="note-modal-title">Insert Image</h4>
                        </div>
                        <div className="note-modal-body">
                          <div className="form-group note-form-group note-group-select-from-files">
                            <label
                              htmlFor="note-dialog-image-file-17721367358671"
                              className="note-form-label"
                            >
                              Select from files
                            </label>
                            <input
                              id="note-dialog-image-file-17721367358671"
                              className="note-image-input form-control-file note-form-control note-input"
                              type="file"
                              name="files"
                              accept="image/*"
                              multiple="multiple"
                            />
                          </div>
                          <div className="form-group note-group-image-url">
                            <label
                              htmlFor="note-dialog-image-url-17721367358671"
                              className="note-form-label"
                            >
                              Image URL
                            </label>
                            <input
                              id="note-dialog-image-url-17721367358671"
                              className="note-image-url form-control note-form-control note-input"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="note-modal-footer">
                          <input
                            type="button"
                            href="#"
                            className="btn btn-primary note-btn note-btn-primary note-image-btn"
                            defaultValue="Insert Image"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="note-popover bottom note-image-popover"
                      style={{ display: "none" }}
                    >
                      <div className="note-popover-arrow" />
                      <div className="popover-content note-children-container">
                        <div className="note-btn-group note-resize">
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <span className="note-fontsize-10">100%</span>
                          </button>
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <span className="note-fontsize-10">50%</span>
                          </button>
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <span className="note-fontsize-10">25%</span>
                          </button>
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-rollback" />
                          </button>
                        </div>
                        <div className="note-btn-group note-float">
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-float-left" />
                          </button>
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-float-right" />
                          </button>
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-rollback" />
                          </button>
                        </div>
                        <div className="note-btn-group note-remove">
                          <button
                            type="button"
                            className="note-btn"
                            tabIndex={-1}
                          >
                            <i className="note-icon-trash" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="note-popover bottom note-table-popover"
                      style={{ display: "none" }}
                    >
                      <div className="note-popover-arrow" />
                      <div className="popover-content note-children-container">
                        <div className="note-btn-group note-add">
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-row-below" />
                          </button>
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-row-above" />
                          </button>
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-col-before" />
                          </button>
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-col-after" />
                          </button>
                        </div>
                        <div className="note-btn-group note-delete">
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-row-remove" />
                          </button>
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-col-remove" />
                          </button>
                          <button
                            type="button"
                            className="note-btn btn-md"
                            tabIndex={-1}
                          >
                            <i className="note-icon-trash" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="note-modal"
                      aria-hidden="false"
                      tabIndex={-1}
                      role="dialog"
                      aria-label="Insert Video"
                    >
                      <div className="note-modal-content">
                        <div className="note-modal-header">
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            <i className="note-icon-close" />
                          </button>
                          <h4 className="note-modal-title">Insert Video</h4>
                        </div>
                        <div className="note-modal-body">
                          <div className="form-group note-form-group row-fluid">
                            <label
                              htmlFor="note-dialog-video-url-17721367358671"
                              className="note-form-label"
                            >
                              Video URL{" "}
                              <small className="text-muted">
                                (YouTube, Vimeo, Vine, Instagram, DailyMotion or
                                Youku)
                              </small>
                            </label>
                            <input
                              id="note-dialog-video-url-17721367358671"
                              className="note-video-url form-control note-form-control note-input"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="note-modal-footer">
                          <input
                            type="button"
                            href="#"
                            className="btn btn-primary note-btn note-btn-primary note-video-btn"
                            defaultValue="Insert Video"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="note-modal"
                      aria-hidden="false"
                      tabIndex={-1}
                      role="dialog"
                      aria-label="Help"
                    >
                      <div className="note-modal-content">
                        <div className="note-modal-header">
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            aria-hidden="true"
                          >
                            <i className="note-icon-close" />
                          </button>
                          <h4 className="note-modal-title">Help</h4>
                        </div>
                        <div
                          className="note-modal-body"
                          style={{ maxHeight: 300, overflow: "scroll" }}
                        >
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>ESC</kbd>
                          </label>
                          <span>Escape</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>ENTER</kbd>
                          </label>
                          <span>Insert Paragraph</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+Z</kbd>
                          </label>
                          <span>Undo the last command</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+Y</kbd>
                          </label>
                          <span>Redo the last command</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>TAB</kbd>
                          </label>
                          <span>Tab</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>SHIFT+TAB</kbd>
                          </label>
                          <span>Untab</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+B</kbd>
                          </label>
                          <span>Set a bold style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+I</kbd>
                          </label>
                          <span>Set a italic style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+U</kbd>
                          </label>
                          <span>Set a underline style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+S</kbd>
                          </label>
                          <span>Set a strikethrough style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+BACKSLASH</kbd>
                          </label>
                          <span>Clean a style</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+L</kbd>
                          </label>
                          <span>Set left align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+E</kbd>
                          </label>
                          <span>Set center align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+R</kbd>
                          </label>
                          <span>Set right align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+J</kbd>
                          </label>
                          <span>Set full align</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+NUM7</kbd>
                          </label>
                          <span>Toggle unordered list</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+SHIFT+NUM8</kbd>
                          </label>
                          <span>Toggle ordered list</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+LEFTBRACKET</kbd>
                          </label>
                          <span>Outdent on current paragraph</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+RIGHTBRACKET</kbd>
                          </label>
                          <span>Indent on current paragraph</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM0</kbd>
                          </label>
                          <span>
                            Change current block's format as a paragraph(P tag)
                          </span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM1</kbd>
                          </label>
                          <span>Change current block's format as H1</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM2</kbd>
                          </label>
                          <span>Change current block's format as H2</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM3</kbd>
                          </label>
                          <span>Change current block's format as H3</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM4</kbd>
                          </label>
                          <span>Change current block's format as H4</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM5</kbd>
                          </label>
                          <span>Change current block's format as H5</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+NUM6</kbd>
                          </label>
                          <span>Change current block's format as H6</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+ENTER</kbd>
                          </label>
                          <span>Insert horizontal rule</span>
                          <div className="help-list-item" />
                          <label style={{ width: 180, marginRight: 10 }}>
                            <kbd>CTRL+K</kbd>
                          </label>
                          <span>Show Link Dialog</span>
                        </div>
                        <div className="note-modal-footer">
                          <p className="text-center">
                            <a href="http://summernote.org/" target="_blank">
                              Summernote 0.8.18
                            </a>{" "}
                            ·{" "}
                            <a
                              href="https://github.com/summernote/summernote"
                              target="_blank"
                            >
                              Project
                            </a>{" "}
                            ·{" "}
                            <a
                              href="https://github.com/summernote/summernote/issues"
                              target="_blank"
                            >
                              Issues
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                  <div className="form-group two">
                    <input type="checkbox" id="html" />
                    <label htmlFor="html">
                      Here, I accepted company terms &amp; conditions.
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <button className="primry-btn-2 lg-btn w-unset" type="submit">
                    Post Now
                  </button>
                </div>
              </div>
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

export default PostJob
