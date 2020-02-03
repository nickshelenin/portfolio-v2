import React, { createFactory } from "react";
import { Link } from "react-router-dom";

function Homepage() {
   return (
      <div className="page home-page">
         <div>
            <h1>Hello, my name is Nick Shelenin</h1>
            <p>
               I'm a web-devloper. Professionally connected with the web development industry and information technology for many
               years.
            </p>

            <Link to="/contact">
               <a href="" className="contact-link">
                  contact me
               </a>
            </Link>
         </div>
      </div>
   );
}

export default Homepage;
