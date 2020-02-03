import React, { Component } from "react";

export class Project extends Component {
   render() {
      const data = this.props.data;
      const img = data.img;
      return (
         <div className="page project-page">
            <div className="project-title-container">
               <h1>{data.website}</h1>
               <p>{data.title}</p>

               <div className="project-links">
                  <a href="" className="project-link project-link--green">
                     visit the website
                  </a>
                  <a href="https://github.com/nickshelenin/proClean" target="blank" className="project-link project-link--red">
                     view the code
                  </a>
               </div>
            </div>

            <div className="project-img">
               <img src={"/img/" + img} alt="" />
            </div>

            <div className="about-project-container">
               <h1>About this project</h1>
               <hr align="left" />
               <p>{data.about}</p>
            </div>

            <div className="tech-sheet-container">
               <h1>Techinal Sheet</h1>

               <hr align="left" />

               <ul>
                  {data.techSheet.map(tech => {
                     return <li>{tech}</li>;
                  })}
               </ul>
            </div>

            <div className="project-email">
               <p>
                  Have something to say? Feel free to contact me via my email at{" "}
                  <span className="email"> nickshelenin@gmail.com </span>
               </p>
            </div>
         </div>
      );
   }
}

export default Project;
