import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
   state = {
      isOpen: false
   };

   handleClick = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   };

   render() {
      return (
         <header className="navbar">
            <div className="logo-container">
               <NavLink to="/">
                  <img src="/img/logo.jpg" alt="" className="logo" />
               </NavLink>
            </div>

            <ul className="nav-links" style={{ right: this.state.isOpen === true ? "0" : "-100%" }}>
               <NavLink exact to="/" activeClassName="active-navlink">
                  <li>
                     <i className="fas fa-home fa-2x"></i>
                     <span>home</span>
                  </li>
               </NavLink>

               <NavLink to="/about" activeClassName="active-navlink">
                  <li>
                     <i className="fas fa-user fa-2x"></i>
                     <span>about</span>
                  </li>
               </NavLink>

               <NavLink to="/portfolio" activeClassName="active-navlink">
                  <li>
                     <i className="fas fa-briefcase fa-2x"></i>
                     <span>work</span>
                  </li>
               </NavLink>

               <NavLink to="/contact" activeClassName="active-navlink">
                  <li>
                     <i className="fas fa-envelope fa-2x"></i>
                     <span>contact</span>
                  </li>
               </NavLink>
            </ul>

            <div className="menu-toggler" onClick={this.handleClick}>
               <span></span>
               <span></span>
               <span></span>
            </div>

            <ul className="navbar__social-links">
               <li>
                  <a href="https://github.com/nickshelenin" target="blank">
                     <i className="fab fa-github fa-2x"></i>
                  </a>
               </li>
            </ul>
         </header>
      );
   }
}

export default Navbar;
