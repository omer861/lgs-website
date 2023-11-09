// import React from 'react'
// import { FaCheck } from 'react-icons/fa';
// import './index.css'


// const Ptcintegrety = () => {
//   return (
//     <div className='ptc-mainContainer'>
//       <div className='ptc-alm-container'>
//         <div className='alm-description-Card'>
//             <h1 className='polarian-heading'>POLARION ALM</h1>
//             <p>LGS is Siemens Polarion Channel partner in India.</p>
//             <p>LGS have been working in Polarion ALM space since 2014 even before Siemens acquisition of Polarion.</p>
//             <p>We have been delivering flawless services across global to various industries such as Automotive, Aerospace, Oil & Gas and Life Science.</p>
//         </div>
        
//         <img className='thingworx-image' alt='ptc' src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689763455/ptc-intigrity_t53sgc.png'/>
        
//       </div>
//       <div className='ptc-alm-container'>
        
//         <img className='thingworx-image' alt='ptc' src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689763447/thingworx_lwwvie.jpg'/>
        
//         <div className='alm-description-Card'>
//             <h1 className='polarian-heading'>BENEFITS & VALUE ADDITION OF POLARION</h1>
//             <ul>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Installation, Upgrade and Maintenance of PTC ThingWorx Server on both Windows as well as Linux Operating System</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Tool Integration with ThingWorx Platform</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>ThingWorx LDAP Configuration</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>ThingWorx SSO Configuration using Ping Federate</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>ThingWorx Custom Widget Development</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Edge Device Communication with ThingWorx Platform</li>
//             </ul>
//         </div>
//       </div>
//       <div className='ptc-services-card-container'>
//       <div className='ptc-services-container'>
//         <h3 className='ptc-services-heading '>IoT Development with ThingWorx</h3>
//         <hr/>
//         <ul>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>IoT use case development</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Data architecture strategy</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Implement architecture for managing IoT devices and systems</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Agents, clients and edge communication fundamentals</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>REST API connectivity</li>
//         </ul>
//       </div>
//       <div className='ptc-services-container'>
//         <h3 className='ptc-services-heading '>IoT Modeling with ThingWorx</h3>
//         <hr/>
//         <ul>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>User-centered solution design</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Modeling patterns and strategies</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Data structures, Events and Subscriptions</li>
//             <li className='list-items'><span className='check-icons'><FaCheck/></span>Wrapped JavaScript services</li>
//         </ul>
//       </div>
//       </div> 
//       </div>  
//   )
// }

// export default Ptcintegrety


import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Ptcintegrety extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".ptc-reval");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };
  render() {
    return (
      <div className="container-fluid p-4 polarian-bg-colour">
        <div className="row ptc-first-page">
          <div className="col-12 col-md-12 col-lg-7 ptc-first-text-container ptc-reval ">
            <h1 className="polarian-heading">POLARION ALM</h1>
            <p className=" line-elements">
              LGS is Siemens Polarion Channel partner in India.
            </p>
            <p className=" line-elements">
              LGS have been working in Polarion ALM space since 2014 even before
              Siemens acquisition of Polarion.
            </p>
            <p className=" line-elements">
              We have been delivering flawless services across global to various
              industries such as Automotive, Aerospace, Oil & Gas and Life
              Science.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-5 ptc-reval  ">
            <img
              className="thingworx-image"
              alt="ptc"
              src="https://res.cloudinary.com/dots1s0gu/image/upload/v1689763455/ptc-intigrity_t53sgc.png"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-5 order-2 order-md-2 order-lg-1">
            <img
              className="thingworx-image"
              alt="ptc"
              src="https://res.cloudinary.com/dots1s0gu/image/upload/v1689763447/thingworx_lwwvie.jpg"
            />
          </div>

          <div className="col-12 col-md-12 col-lg-7 pt-5 ptc-integrity-card rder-1 order-md-1 order-lg-2">
            <h1 className="polarian-heading">
              BENEFITS & VALUE ADDITION OF POLARION
            </h1>
            <ul>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Installation, Upgrade and Maintenance of PTC ThingWorx Server on
                both Windows as well as Linux Operating System
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Tool Integration with ThingWorx Platform
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                ThingWorx LDAP Configuration
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                ThingWorx SSO Configuration using Ping Federate
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                ThingWorx Custom Widget Development
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Edge Device Communication with ThingWorx Platform
              </li>
            </ul>
          </div>
        </div>
        <div className="row ptc-card-container">
          <div className="col-12 col-md-12 col-lg-6 ptc-box polarian-cyan ptc-reval">
            <h1 className="polarian-heading">IoT Development with ThingWorx</h1>
            <hr />
            <ul>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                IoT use case development
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Data architecture strategy
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Implement architecture for managing IoT devices and systems
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Agents, clients and edge communication fundamentals
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                REST API connectivity
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-6 ptc-box polarian-red ptc-reval">
            <h1 className="polarian-heading">IoT Modeling with ThingWorx</h1>
            <hr />
            <ul>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                User-centered solution design
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Modeling patterns and strategies
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Data structures, Events and Subscriptions
              </li>
              <li className="list-items line-elements">
                <span className="check-icons">
                  <FaCheck />
                </span>
                Wrapped JavaScript services
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Ptcintegrety;