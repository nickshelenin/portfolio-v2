import React, { Component } from "react";

export class ContactForm extends Component {
   render() {
      return (
         <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" className="contact-form">
            <input type="text" placeholder="name" name="name" />
            <input type="email" placeholder="email" name="email" />
            <textarea placeholder="message" name="message"></textarea>
            <button type="submit">send</button>
         </form>
      );
   }
}

export default ContactForm;
