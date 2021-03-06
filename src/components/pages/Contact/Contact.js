import React, { Component } from 'react';

import './Contact.scss';

class ContactPage extends Component {
  render() {
    return (
      <div className='page contact-page'>
        <div className='page-title-container'>
          <h1 className='page-title'>Contact me</h1>
          <p>
            If you have any questions that you want to discuss with me directly you can use either my Whatsapp or email address to
            reach me out. Everything is down below.
          </p>
        </div>

        <div className='page-container'>
          <div className='contact-links'>
            <div className='contact-link'>
              <i className='fab fa-whatsapp fa-3x' style={{ color: '#25d366' }}></i>
              <span>+(996)-554-553-550</span>
            </div>
            <div className='contact-link'>
              <i className='fas fa-envelope fa-3x' style={{ color: '#fff' }}></i>
              <span>nickshelenin@gmail.com</span>
            </div>
          </div>

          {/* <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" className="contact-form">
                  <input type="text" placeholder="name" name="name" />
                  <input type="email" placeholder="email" name="email" />
                  <textarea placeholder="message" name="message"></textarea>
                  <button type="submit">send</button>
               </form> */}

          <div className='social-links'>
            <div>
              <a href='https://github.com/nickshelenin' target='blank'>
                <i className='fab fa-github fa-2x'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
