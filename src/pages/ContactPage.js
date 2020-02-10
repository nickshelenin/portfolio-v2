import React, { Component } from "react";
import Form from "../components/ContactForm";

class ContactPage extends Component {
   render() {
      return (
         <div className="page contact-page">
            <div className="page-title-container">
               <h1 className="page-title">Contact me</h1>

               <p>
                  If you have any questions that you want to discuss with me directly you can use either my Whatsapp or email address
                  to reach me out. Everything is down below
               </p>
            </div>

            <div className="page-container">
               <div className="contact-links">
                  <div className="contact-link">
                     <i class="fab fa-whatsapp fa-3x" style={{ color: "#25d366" }}></i>
                     <span>+(996)-554-553-550</span>
                  </div>
                  <div className="contact-link">
                     <i class="fas fa-envelope fa-3x" style={{ color: "#fff" }}></i>
                     <span>nickshelenin@gmail.com</span>
                  </div>
               </div>

               {/* <Form /> */}

               <div className="social-links">
                  <div>
                     <a href="https://github.com/nickshelenin" target="blank">
                        <i class="fab fa-github fa-2x"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default ContactPage;
