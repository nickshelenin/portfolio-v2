import React, { createFactory } from "react";
import { Link } from "react-router-dom";

function Homepage() {
   return (
      <div className="page home-page">
         <div>
            <p>Hello, I'm</p>
            <div>
               {/* I'm a web-devloper. Primarily oriented in Front-End development. You can see my projects in the work section that you
               can navigate to from navbar on the left side */}
            </div>
            <p>A web developer</p>


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
