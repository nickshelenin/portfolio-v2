import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import './Home.scss';

class Homepage extends React.Component {
   componentDidMount() {
      const findLength = () => {
         console.log(this.nodes.map(node => node.getTotalLength()));
      };
      findLength();

      // gsap.set(".home-title-one", {
      //    x: "-100%"
      // });
      // gsap.set(".home-title-two", {
      //    x: "100%"
      // });

      // gsap.to(".home-title-one", {
      //    delay: 2,
      //    x: "0%"
      // });
      // gsap.to(".home-title-two", {
      //    delay: 2,
      //    x: "0%"
      // });
   }

   render() {
      this.nodes = [];

      return (
         <div className="page home-page">
            <div>
               <div className="box1">
                  <p>
                     <span className="home-title-one"> Hi, I'm</span>
                  </p>
               </div>

               <svg
                  width="513"
                  height="57"
                  viewBox="0 0 513 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-animation"
               >
                  <path
                     d="M42.6094 54H33.7148L10.8984 17.6836V54H2.00391V2.8125H10.8984L33.7852 39.2695V2.8125H42.6094V54Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M62.5078 54H53.6484V2.8125H62.5078V54Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M112.5 37.3359C111.984 42.7969 109.969 47.0625 106.453 50.1328C102.938 53.1797 98.2617 54.7031 92.4258 54.7031C88.3477 54.7031 84.75 53.7422 81.6328 51.8203C78.5391 49.875 76.1484 47.1211 74.4609 43.5586C72.7734 39.9961 71.8945 35.8594 71.8242 31.1484V26.3672C71.8242 21.5391 72.6797 17.2852 74.3906 13.6055C76.1016 9.92578 78.5508 7.08984 81.7383 5.09766C84.9492 3.10547 88.6523 2.10938 92.8477 2.10938C98.4961 2.10938 103.043 3.64453 106.488 6.71484C109.934 9.78516 111.938 14.1211 112.5 19.7227H103.641C103.219 16.043 102.141 13.3945 100.406 11.7773C98.6953 10.1367 96.1758 9.31641 92.8477 9.31641C88.9805 9.31641 86.0039 10.7344 83.918 13.5703C81.8555 16.3828 80.8008 20.5195 80.7539 25.9805V30.5156C80.7539 36.0469 81.7383 40.2656 83.707 43.1719C85.6992 46.0781 88.6055 47.5312 92.4258 47.5312C95.918 47.5312 98.543 46.7461 100.301 45.1758C102.059 43.6055 103.172 40.9922 103.641 37.3359H112.5Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M135.176 31.8867L129.375 38.0391V54H120.48V2.8125H129.375V26.8242L134.297 20.7422L149.273 2.8125H160.031L141.012 25.4883L161.121 54H150.574L135.176 31.8867Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M210.586 40.8164C210.586 38.5664 209.789 36.832 208.195 35.6133C206.625 34.3945 203.777 33.1641 199.652 31.9219C195.527 30.6797 192.246 29.2969 189.809 27.7734C185.145 24.8438 182.812 21.0234 182.812 16.3125C182.812 12.1875 184.488 8.78906 187.84 6.11719C191.215 3.44531 195.586 2.10938 200.953 2.10938C204.516 2.10938 207.691 2.76562 210.48 4.07812C213.27 5.39062 215.461 7.26562 217.055 9.70312C218.648 12.1172 219.445 14.8008 219.445 17.7539H210.586C210.586 15.082 209.742 12.9961 208.055 11.4961C206.391 9.97266 204 9.21094 200.883 9.21094C197.977 9.21094 195.715 9.83203 194.098 11.0742C192.504 12.3164 191.707 14.0508 191.707 16.2773C191.707 18.1523 192.574 19.7227 194.309 20.9883C196.043 22.2305 198.902 23.4492 202.887 24.6445C206.871 25.8164 210.07 27.1641 212.484 28.6875C214.898 30.1875 216.668 31.9219 217.793 33.8906C218.918 35.8359 219.48 38.1211 219.48 40.7461C219.48 45.0117 217.84 48.4102 214.559 50.9414C211.301 53.4492 206.871 54.7031 201.27 54.7031C197.566 54.7031 194.156 54.0234 191.039 52.6641C187.945 51.2812 185.531 49.3828 183.797 46.9688C182.086 44.5547 181.23 41.7422 181.23 38.5312H190.125C190.125 41.4375 191.086 43.6875 193.008 45.2812C194.93 46.875 197.684 47.6719 201.27 47.6719C204.363 47.6719 206.684 47.0508 208.23 45.8086C209.801 44.543 210.586 42.8789 210.586 40.8164Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M267.926 54H259.066V31.2539H236.18V54H227.285V2.8125H236.18V24.1172H259.066V2.8125H267.926V54Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M308.391 31.1484H287.367V46.8984H311.941V54H278.473V2.8125H311.695V9.98438H287.367V24.1172H308.391V31.1484Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M328.078 46.8984H351.316V54H319.184V2.8125H328.078V46.8984Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M388.055 31.1484H367.031V46.8984H391.605V54H358.137V2.8125H391.359V9.98438H367.031V24.1172H388.055V31.1484Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M439.453 54H430.559L407.742 17.6836V54H398.848V2.8125H407.742L430.629 39.2695V2.8125H439.453V54Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M459.352 54H450.492V2.8125H459.352V54Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
                  <path
                     d="M510.891 54H501.996L479.18 17.6836V54H470.285V2.8125H479.18L502.066 39.2695V2.8125H510.891V54Z"
                     stroke="white"
                     strokeWidth="2"
                     mask="url(#path-1-outside-1)"
                     ref={node => {
                        this.nodes.push(node);
                     }}
                  />
               </svg>

               <div className="box2">
                  <p>
                     <span className="home-title-two">web developer</span>
                  </p>
               </div>
               {/* 
               <Link to="/contact" className="contact-link">
                  contact me
               </Link> */}
            </div>
         </div>
      );
   }
}

export default Homepage;
