import React from "react";

function AboutPage() {
   return (
      <div className="page about-page">
         <div className="page-title-container">
            <h1 className="page-title">About me</h1>

            <p>I'm a Front-End web developer. Love building stuff with React on the front-end.</p>
            <p>Currently learning with PHP with Laravel framework.</p>
            <p>Below you can see my primary skills.</p>
         </div>

         <div className="page-container">
            <h1 className="page-title">Skills</h1>

            <div className="skills">
               <ul className="skills__list">
                  <li>
                     <i class="fab fa-html5" style={{ color: "#e34f26" }}></i>
                     <span>HTML</span>
                  </li>

                  <li>
                     <i class="fab fa-css3-alt" style={{ color: "#2196F3" }}></i>
                     <span>CSS</span>
                  </li>

                  <li>
                     <i class="fab fa-sass" style={{ color: "#c69" }}></i>
                     <span>SCSS</span>
                  </li>

                  <li>
                     <i class="fab fa-js-square" style={{ color: "#f7df1e" }}></i>
                     <span>JavaScript</span>
                  </li>

                  <li>
                     <i class="fab fa-react" style={{ color: "#00d8ff" }}></i>
                     <span>React</span>
                  </li>
               </ul>

               <ul className="skills__list">
                  <li>
                     <i class="fab fa-github" style={{ color: "#fff" }}></i>
                     <span>GitHub</span>
                  </li>

                  <li>
                     <i class="fab fa-git-alt" style={{ color: "#F05033" }}></i>
                     <span>Git</span>
                  </li>

                  <li>
                     <i class="fab fa-php" style={{ color: "#4f5b93" }}></i>
                     <span>php</span>
                  </li>

                  <li>
                     <i class="fab fa-laravel" style={{ color: "#f55247" }}></i>
                     <span>Laravel</span>
                  </li>

                  <li>
                     <i class="fas fa-database" style={{ color: "#00758f" }}></i>
                     <span>Mysql</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default AboutPage;
