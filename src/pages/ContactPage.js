import React, { Component } from "react";

class ContactPage extends Component {
   render() {
      return (
         <div className="page contact-page">
            <div className="page-title-container">
               <h1 className="page-title">Contact me</h1>

               <p>
                  I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to contact me using below form either.
               </p>
            </div>

            <div className="page-container">
               {/* <form action="" method="post" className="contact-form">
                  <input type="text" placeholder="name" />
                  <input type="email" placeholder="email" />
                  <textarea placeholder="message"></textarea>
                  <button>send</button>
               </form> */}

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
