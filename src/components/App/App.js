import React from "react";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import HomePage from "../../pages/Home/Home";
import AboutPage from "../../pages/About/About";
import PortfolioPage from "../../pages/Portfolio/Portfolio";
import ContactPage from "../../pages/Contact/Contact";
import Project from "../../pages/Project/Project";
import NotFoundPage from "../../pages/NotFound/NotFound";

class App extends React.Component {
   state = {
      project1: {
         website: "proclean",
         title: "proClean is a cleaning company website",
         img: "screenshot.png",
         about: "This is a informational website for fake company ProClean. All technologies that have been used in this project listed below.   ",
         techSheet: ["HTML5", "CSS3", "Scss", "JavaScript"],
         websiteLink: "https://nickshelenin.github.io/proClean/",
         codeLink: "https://github.com/nickshelenin/proClean"
      }
   };

   render() {
      return (
         <>
            <Router>
               <Navbar />
               <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/about' component={AboutPage} />
                  <Route exact path='/portfolio' component={PortfolioPage} />
                  <Route exact path='/contact' component={ContactPage} />

                  <Route exact path='/portfolio/1'>
                     <Project data={this.state.project1} />
                  </Route>

                  <Route to='*' component={NotFoundPage} />
               </Switch>
            </Router>
         </>
      );
   }
}

export default App;
