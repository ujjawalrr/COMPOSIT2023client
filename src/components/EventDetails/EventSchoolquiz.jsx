import React from "react";
import { Link } from "react-router-dom";

class EventSchoolquiz extends React.Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };
  render() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
    return (
      <div className="event-details-area ptb-120">
        <section className="event-area bg-image ptb-120">
          <div
            className="col-lg-3 col-sm-6 p-0"
            style={{ textAlign: "center" }}
          >
            <div className="single-events">
              <img
                src={require("../../assets/images/SchoolQuiz.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>School Quiz</h2>
                <h3>Win Exciting Gifts and Merchandise</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
                {/* {userData ? (
                  <Link to="/#" className="btn btn-primary">
                    Register
                  </Link>
                ) : (
                  <Link to="/signup" className="btn btn-primary">
                    Register
                  </Link>
                )} */}
                <a
                  href="https://unstop.com/quiz/school-quiz-iit-kharagpur-659942"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Link to School Quiz
                </a>
                {userData ? <a
                  href="https://forms.gle/55yRrTe4MHQ7eKSi7"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Registration Link
                </a> :
                <Link to="/login" className="btn btn-primary">Login to Register</Link>
                }
                {/* <Link
                  to="#"
                //   target="_blank"
                  className="btn btn-secondary"
                  disabled
                >
                  Rules & Regulations
                </Link> */}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tab">
                  <ul className="tabs active">
                    <li
                      onClick={(e) => this.openTabSection(e, "tab1")}
                      className="current"
                    >
                      <Link to="#">About</Link>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <Link to="#">Structure</Link>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <Link to="#">Timeline</Link>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab4")}>
                      <Link to="#">Contacts</Link>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="schedule-info">
                              <h3>School Quiz</h3>

                              <p>
                                A quiz held for curious school kids from class 9
                                to class 12 to get exposed to the immense pool
                                of cognizance lying ahead, showcase their talent
                                and win back exciting prizes. Questions can
                                involve logic reasoning puzzles, general science
                                and math questions and more. Register now and
                                compete with sharp minds from all over the
                                country!
                              </p>

                              {/* <ul>
                                                            <li><i className="icofont-wall-clock"></i> Electronic Materials and Nanotechnology, Computational Material Science</li>
                                                            <li><i className="icofont-wall-clock"></i> Advanced Materials and Functional Materials Biomaterials</li>
                                                            <li><i className="icofont-wall-clock"></i> Material Processes Physical, Extractive and Mechanical Metallurgy</li>
                                                        </ul> */}
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab2" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Participation Criteria</h3>

                              <ul>
                                <li>
                                  {" "}
                                  Team participation is allowed for students of
                                  class 9 to class 12, up to a maximum of 2
                                  members.{" "}
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h3>Rounds of the Event</h3>
                              <p>
                                The event will be conducted online on D2C platform. Link will be shared. The team must complete registration
                                before the deadline in order to take part.
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab3" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Important Dates</h3>

                              <ul>
                                <li>
                                  <b>Deadline for registration:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>{" "}
                                  upto the event
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Quiz:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>2nd April 2023
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab4" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              {/* <h3>Contact Info</h3> */}

                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Sudarshana Jaiswal</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>6265197814</b>
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              {/* <h3>Contact Info</h3> */}

                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Alluri Hasitha</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9392703946</b>
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape1">
            <img
              src={require("../../assets/images/shapes/1.png")}
              alt="shape1"
            />
          </div>
          <div className="shape2 rotateme">
            <img
              src={require("../../assets/images/shapes/2.png")}
              alt="shape2"
            />
          </div>
          <div className="shape3 rotateme">
            <img
              src={require("../../assets/images/shapes/3.png")}
              alt="shape3"
            />
          </div>
          <div className="shape4">
            <img
              src={require("../../assets/images/shapes/4.png")}
              alt="shape4"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default EventSchoolquiz;
