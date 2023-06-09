import React from "react";
import { Link } from "react-router-dom";

class EventTechnova extends React.Component {
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
                src={require("../../assets/images/Technova1.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Technova</h2>
                <h3>Cash Prize worth 28K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
              {userData ? <a
                  href="https://forms.gle/sqA1B7Gw3gKnePAc8"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Submission Link
                </a> :
                <Link to="/login" className="btn btn-primary">Login to Submit</Link>
              }
              
                <a
                  href="https://drive.google.com/file/d/1A7Dhc9_CdSSnoewBx6oopLqDXuD1cMjN/view?usp=drivesdk"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Rules & Regulations
                </a>
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
                              <h3>Technova</h3>

                              <p>
                                Technical paper presentation event of any
                                scientific work (original or of other
                                scientists) in one of the following categories:{" "}
                              </p>

                              <ul>
                                <li>
                                  <i className="icofont-wall-clock"></i>{" "}
                                  Electronic Materials and
                                  Nanotechnology/Computational Material Science
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>{" "}
                                  Advanced Materials/Functional Materials/Energy
                                  Materials and Biomaterials
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>{" "}
                                  Material Processes/Physical, Extractive and
                                  Mechanical Metallurgy
                                </li>
                              </ul>
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
                                  Participation can be individual or in a team
                                  of a maximum of three participants.{" "}
                                </li>
                                <li>
                                  {" "}
                                  All members should be students pursuing a
                                  B.Tech/ BSc./ Dual/ MTech/ MSc degree in any
                                  engineering college in India.{" "}
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
                              <p>The event will have two rounds as follows:</p>

                              <ul>
                                <li>
                                  <b>Report submission round (Online):</b>
                                  <ul>
                                    <li>
                                      The paper and corresponding report should
                                      be submitted. Based on the difficulty and
                                      quality of the report, top submissions
                                      will be called for the final presentation
                                      round.
                                    </li>
                                  </ul>
                                </li>
                                <li></li>
                                <li>
                                  <b>Final Presentation Round:</b>
                                  <ul>
                                    <li>
                                      Presentation of the paper before a panel
                                      of judges who will evaluate the
                                      participant based on the understanding and
                                      analysis of the literature.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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
                                  <b>Abstract Submission Deadline:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>1st
                                  April 2023, 11:59 PM
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final presentation:</b>
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
                                <b>Ramona Kodkani</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9834467788</b>
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
                                <b>Gourav Pathak</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>6204935889</b>
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

export default EventTechnova;
