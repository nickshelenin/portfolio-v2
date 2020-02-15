import React from 'react';
import './Home.scss';

import Navbar from '../Navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Project from './pages/Project';
import NotFoundPage from './pages/NotFoundPage';

class Home extends React.Component {
   render() {
      return (
         <>
            <Navbar />
            <h1>Home</h1>
         </>
      );
   }
}
