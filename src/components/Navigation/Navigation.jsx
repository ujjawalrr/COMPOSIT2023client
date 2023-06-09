import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import axios from 'axios';
 
class Navigation extends React.Component {
    userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    state = {
        collapsed: true,
        isOpen: false
    };

    toggleNavbar = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      });
    }

    logout = async (e) => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/auth/logout`);
            localStorage.clear();
            window.location = `/`
        } catch (error) {
            console.log(error)
        }
    }
    login = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    componentDidUpdate(nextProps) {
        if (this.props.match.path !== nextProps.match.path) {
            // this.onRouteChanged();
            console.log('OK')
        }
    }

    onRouteChanged = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    // logout = async (e) => {
    //     e.preventDefault();
    //     await axios.post("/auth/logout");
    //     localStorage.clear();
    // };


    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        const jwtToken = document.cookie
        return (
            <header id="header" className="header-area">
                <div id="navbar" className="elkevent-nav">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <NavLink 
                                            exact="true" 
                                            to="/" 
                                            onClick={this.toggleNavbar} 
                                            className="nav-link"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink 
                                            to="/about" 
                                            onClick={this.toggleNavbar} 
                                            className="nav-link"
                                        >
                                            About
                                        </NavLink> 
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/ourteam" 
                                            className="nav-link"
                                            onClick={this.toggleNavbar}
                                        >
                                            Our Team
                                        </NavLink>
                                    </li>

                                    {/* <li className="nav-item">
                                        <NavLink 
                                            to="/schedule" 
                                            className="nav-link"
                                            onClick={this.toggleNavbar}
                                        >
                                            Schedule
                                        </NavLink>
                                    </li> */}

                  <li className="nav-item">
                    <NavLink
                      to="/events"
                      className="nav-link"
                      onClick={this.toggleNavbar}
                    >
                      Events
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/guestlecture"
                      className="nav-link"
                      onClick={this.toggleNavbar}
                    >
                      Our Speakers
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/sponsors"
                      className="nav-link"
                      onClick={this.toggleNavbar}
                    >
                      Sponsors
                    </NavLink>
                  </li>

                  {/* <li className="nav-item">
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      onClick={this.toggleNavbar}
                    >
                      Contact
                    </NavLink>
                  </li> */}

                  {/* {<li className="nav-item">
                                        <NavLink 
                                            to="/login" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Login
                                        </NavLink>
                                    </li>} */}
                                    {<li className="nav-item">
                                        {
                                            this.userData ? <NavLink 
                                            to="/events" 
                                            className="nav-link" 
                                            onClick={this.logout}
                                        >
                                            Logout
                                        </NavLink> :
                                        
                                    <NavLink 
                                        to="/login" 
                                        className="nav-link" 
                                        onClick={this.login}
                                    >
                                        Login
                                    </NavLink> }
                                </li>}
                                    

                                    {/* <li className="nav-item">
                                        <NavLink 
                                            to="/profile" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Profile
                                        </NavLink>
                                    </li> */}

                  {/* <li className="nav-item">
                                        <NavLink 
                                            to="/signup" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            {jwtToken}
                                        </NavLink>
                                    </li> */}

                  {
                    <li className="nav-item">
                      {this.userData ? (
                        <NavLink
                          to="/profile"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          Profile
                        </NavLink>
                      ) : (
                        <NavLink
                          to="/signup"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          SignUp
                        </NavLink>
                      )}
                    </li>
                  }

                  {/* <li className="nav-item">
                    <NavLink
                      to="/signup"
                      className="nav-link"
                      onClick={this.toggleNavbar}
                    >
                      Signup
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Navigation);
