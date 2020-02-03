import React from "react";
import "./assets/css/App.scss";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import ContactPage from "./components/pages/ContactPage";
import Project from "./components/pages/Project1";
import NotFoundPage from "./components/pages/NotFoundPage";

class App extends React.Component {
   state = {
      project1: {
         website: "proclean", 
         title: "proClean is a cleaning company website",
         img: "screenshot.png",
         about:
            "Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.",
         techSheet: ["HTML5", "CSS3", "Scss", "JavaScript"]
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
