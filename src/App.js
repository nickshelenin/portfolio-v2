import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Project from "./pages/Project";
import NotFoundPage from "./pages/NotFoundPage";

class App extends React.Component {
   state = {
      project1: {
         website: "proclean",
         title: "proClean is a cleaning company website",
         img: "screenshot.png",
         about:
            "This is a informational website for fake company ProClean. All technologies that have been used in this project listed below.",
         techSheet: ["HTML5", "CSS3", "Scss", "JavaScript"],
         websiteLink: "https://nickshelenin.github.io/proClean/",
         codeLink: "https://github.com/nickshelenin/proClean"
      }
   };
   render() {
      return (
         <Router>
            <div className="page-">
               <Navbar />

               <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route exact path="/portfolio" component={PortfolioPage} />
                  <Route path="/contact" component={ContactPage} />

                  <Route path="/portfolio/1">
                     <Project data={this.state.project1} />
                  </Route>

                  <Route to="*" component={NotFoundPage} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
