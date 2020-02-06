import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
   return (
      <div className="page not-found-page">
         <div className="not-found-page__card">
            <h1>Page Not Found</h1>
            <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>

            <Link to='/'>
               <span>Back to home page</span>
            </Link>
         </div>
      </div>
   );
}

export default NotFoundPage;
