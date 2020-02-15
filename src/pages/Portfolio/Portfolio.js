import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import './Portfolio.scss'

class PortfolioPage extends Component {
   render() {
      return (
         <div className="page portfolio-page">
            <div className="page-title-container">
               <h1 className="page-title">web developer portfolio</h1>
               <p>
                 Check out my latest web development projects.
               </p>
            </div>

            <div className="projects">
               <Link to="/portfolio/1">
                  <div className="project-card">
                     <img src="/img/screenshot.png" alt="" />
                  </div>
               </Link>

               <Link to="/portfolio/2">
                  <div className="project-card">
                     <img src="/img/screenshot.png" alt="" />
                  </div>
               </Link>

               <Link to="/portfolio/3">
                  <div className="project-card">
                     <img src="/img/screenshot.png" alt="" />
                  </div>
               </Link>

               <Link to="/portfolio/4">
                  <div className="project-card">
                     <img src="/img/screenshot.png" alt="" />
                  </div>
               </Link>
            </div>

            <Footer />
         </div>
      );
   }
}

export default PortfolioPage;
