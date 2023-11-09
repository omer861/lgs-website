import { Link, NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { Component } from "react";

import "./index.css";

class HomepageHeader extends Component {
  state = { showNavItems: false, showmblItems: false };

  toggleShowNavItems = () => {
    this.setState((prevState) => ({ showNavItems: !prevState.showNavItems }));
  };

  onClickNavItem = () => {
    this.setState((prevState) => ({ showmblItems: !prevState.showmblItems }));
  };

  // showMblNavminiItems = () => {
  //   const { showmblItems } = this.state;
  //   console.log(showmblItems);
  //   return (
  //     <ul className="mbl-Nav-Service-container-items">
  //         <li className="Headeroption-item">
  //         <Link to="/polarianalm" className="link">Polarion ALM
  //         </Link>
  //         </li>

  //       <Link to="/saascloudsolutions" className="link">
  //         <li className="Headeroption-item">SAAS & cloud Solutions</li>
  //       </Link>
  //       <Link to="/ptcintegrity" className="link">
  //         <li className="Headeroption-item">PTC Integrity</li>
  //       </Link>
  //       <Link to="/mobileandappdevelopment" className="link">
  //         <li className="Headeroption-item">Mobile & APP Development</li>
  //       </Link>
  //       <Link to="/resellermendix" className="link">
  //         <li className="Headeroption-item">Mendix</li>
  //       </Link>
  //       <Link to="/salesforcepage" className="link">
  //         <li className="Headeroption-item">Sales Force</li>
  //       </Link>
  //     </ul>
  //   );
  // };

  // Mobile View Navbar Code

  renderNavItems = () => {
    return (
      <div className="mbl-nav-items-container">
        <ul className="mbl-nav-menu">
          <li className="nav-mbl-menu-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-mbl-menu-item">
            <a href="#clients" className="inactive">
              CLIENTS
            </a>
          </li>
          <li className="nav-mbl-menu-item">
            <a href="#technologies" className="inactive">
              TECHNOLOGIES
            </a>
          </li>

          <li className="nav-mbl-service-container nav-mbl-menu-item">
            PRODUCTS
            <ul className="mbl-Nav-Service-container-items">
              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Quanta Genius
                </Link>
              </li>
              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Taxoguru Consulting
                </Link>
              </li>

              <li className="Headeroption-item">
                {" "}
                <Link to="/contactus" className="link">
                  Glorious Mindmine
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  LGS Fresh
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Digival
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  SRM 360 degree Consulting
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-mbl-service-container nav-mbl-menu-item">
            SERVICES
            <ul className="mbl-Nav-Service-container-items technology-overflow">
              <div className="nav-service-flex-contianer-items">
                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/contactus"
                  >
                    ONLINE MARKETING
                  </Link>
                </h6>
                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/contactus"
                  >
                    CREATIVE DESIGN
                  </Link>
                </h6>
                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/saascloudsolutions"
                  >
                    SAAS & CLOUD
                  </Link>
                </h6>

                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/contactus"
                  >
                    CONSULTANT
                  </Link>
                </h6>

                <h6>
                  <Link className="Nav-teachnology-main-heading" to="/testing">
                    {" "}
                    TESTING
                  </Link>
                </h6>

                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/mobileandappdevelopment"
                  >
                    WEB DESIGN & DEVELOPMENT
                  </Link>
                </h6>

                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/resellermendix"
                  >
                    MENDIX
                  </Link>
                </h6>

                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/polarianalm"
                  >
                    POLARIAN ALM
                  </Link>
                </h6>

                <h6>
                  <Link
                    className="Nav-teachnology-main-heading"
                    to="/salesforcepage"
                  >
                    SALESFORCE
                  </Link>
                </h6>
              </div>
            </ul>
          </li>

          <li className="nav-mbl-menu-item">
            <Link to="/careers" className="nav-link">
              CAREERS
            </Link>
          </li>

          <li className="nav-mbl-service-container nav-mbl-menu-item">
            RESELLER
            <ul className="mbl-Nav-Service-container-items">
              <li className="Headeroption-item">
                <Link to="/resellermendix" className="link">
                  MENDIX
                </Link>
              </li>
              <li className="Headeroption-item">
                <Link to="/resellerpolarian" className="link">
                  POLARION
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-mbl-menu-item">
            <Link to="/aboutus" className="nav-link">
              ABOUT US
            </Link>
          </li>

          <li className="nav-mbl-menu-item">
            <Link to="/contactus" className="nav-link">
              CONTACT US
            </Link>
          </li>

          <li className="nav-mbl-menu-item-hire">
            <button className="hirepod-mbl-nav-home-btn">
              <Link to="/pods" className="nav-link">
                HIRE A POD
              </Link>
            </button>
          </li>
        </ul>
      </div>
    );
  };

  // Web view Navbar Code

  render() {
    const { showNavItems } = this.state;
    return (
      <>
        <nav className="nav-header sticky-header">
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/" className="nav-link">
                <img
                  alt="website logo"
                  className="nav-mobile-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
                />
              </Link>
              <button
                type="button"
                onClick={this.toggleShowNavItems}
                className="nav-mobile-btn"
              >
                <GiHamburgerMenu className="nav-mobile-menu-icon" />
              </button>
            </div>
            <div className="nav-bar-large-container">
              <Link to="/" className="nav-link">
                <img
                  className="nav-website-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
                  alt="website logo"
                />
              </Link>
              <ul className="nav-menu">
                <li className="Nav-Service-container nav-menu-item home-padding">
                  <NavLink to="/" activeclassname="active" className="inactive">
                    HOME
                  </NavLink>
                </li>
                <li className="Nav-Service-container nav-menu-item technology-item">
                  PRODUCTS
                  <ul className="Nav-products-container-items">
                    <h6>
                      <Link className="product-heading" to="/contactus">
                        Quanta Genius
                      </Link>
                    </h6>
                    <h6>
                      <Link to="/contactus" className="product-heading">
                        Taxoguru Consulting
                      </Link>
                    </h6>
                    <h6>
                      <Link to="/contactus" className="product-heading">
                        Glorious Mindmine
                      </Link>
                    </h6>
                    <h6>
                      <Link to="/contactus" className="product-heading">
                        LGS Fresh
                      </Link>
                    </h6>
                    <h6>
                      <Link to="/contactus" className="product-heading">
                        Digival
                      </Link>
                    </h6>
                    <h6>
                      <Link to="/contactus" className="product-heading">
                        SRM 360 degree Consulting
                      </Link>
                    </h6>
                  </ul>
                </li>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  <a href="#clients" className="inactive">
                    CLIENTS
                  </a>
                </li>
                <li className="Nav-Service-container nav-menu-item technology-item">
                  <a href="#technologies" className="inactive">
                    TECHNOLOGIES
                  </a>
                </li>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  SERVICES
                  <ul className="Nav-Service-container-items nav-service-flex-contianer ">
                    <div className="nav-service-flex-contianer-items">
                      <div className="nav-service-text-container">
                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/contactus"
                          >
                            Online Marketing
                          </Link>
                        </h6>
                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/contactus"
                          >
                            Creative Design
                          </Link>
                        </h6>
                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/saascloudsolutions"
                          >
                            Saas & Cloud
                          </Link>
                        </h6>
                      </div>
                      <div className="nav-service-text-container">
                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/contactus"
                          >
                            Consultant
                          </Link>
                        </h6>

                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/testing"
                          >
                            {" "}
                            Testing
                          </Link>
                        </h6>

                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/mobileandappdevelopment"
                          >
                            Web Design & Development
                          </Link>
                        </h6>
                      </div>
                      <div className="nav-service-text-container">
                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/resellermendix"
                          >
                            Mendix
                          </Link>
                        </h6>

                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/polarianalm"
                          >
                            Polarian ALM
                          </Link>
                        </h6>

                        <h6>
                          <Link
                            className="Nav-teachnology-main-heading"
                            to="/salesforcepage"
                          >
                            Salesforce
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-menu-item career-padding">
                  <NavLink
                    to="/careers"
                    activeclassname="active"
                    className="inactive"
                  >
                    CAREERS
                  </NavLink>
                </li>

                <li className="Nav-Reseller-container nav-menu-item career-padding technology-item">
                  RESELLER
                  <ul className="Nav-Reseller-container-items">
                    <li className="nav-reseller-polarion-text">
                      <Link to="/resellerpolarian" className="nav-link">
                        Polarion
                      </Link>
                    </li>
                    <li className="nav-reseller-mendix-text">
                      <Link to="/resellermendix" className="nav-link">
                        Mendix
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-menu-item about-us-nav about-padding">
                  <NavLink
                    to="/aboutus"
                    activeclassname="active"
                    className="inactive"
                  >
                    ABOUT US
                  </NavLink>
                </li>

                <li className="nav-menu-item about-us-nav about-padding">
                  <NavLink
                    to="/contactus"
                    activeclassname="active"
                    className="inactive"
                  >
                    CONTACT US
                  </NavLink>
                </li>

                <li className=" about-us-nav about-padding">
                  <button className="hirepod-nav-home-btn">
                    <NavLink
                      to="/pods"
                      // activeclassname="active"
                      className="hire-pod-inactive"
                    >
                      HIRE A POD
                    </NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {showNavItems && this.renderNavItems()}
        </nav>
      </>
    );
  }
}

export default HomepageHeader;
