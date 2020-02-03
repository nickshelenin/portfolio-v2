import React, { Component } from "react";
// import img from "/img/screenshot.png";
import { Link, BrowserRouter as Router } from "react-router-dom";

class PortfolioPage extends Component {
   render() {
      return (
         <div className="page portfolio-page">
            <div className="page-title-container">
               <h1 className="page-title">web developer portfolio</h1>
               <p>
                  From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software
                  development portfolio projects.
               </p>
            </div>

            <div className="projects">
               <Link to="/portfolio/1">
                  <div className="project-card">
                     <img src='/img/screenshot.png' alt="" />
                  </div>
               </Link>

               <Link to="/portfolio/2">
                  <div className="project-card">
                     <img src='/img/screenshot.png' alt="" />
                  </div>
               </Link>

               <Link to="/portfolio/3">
                  <div className="project-card">
                     <img src='/img/screenshot.png' alt="" />
                  </div>
               </Link>

               <Link to="/portfolio/4">
                  <div className="project-card">
                     <img src='/img/screenshot.png' alt="" />
                  </div>
               </Link>
            </div>
         </div>
      );
   }
}

export default PortfolioPage;
