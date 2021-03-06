import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HomePage from '../pages/Home/Home';
import AboutPage from '../pages/About/About';
import PortfolioPage from '../pages/Portfolio/Portfolio';
import ContactPage from '../pages/Contact/Contact';
import ProjectPage from '../pages/Project/Project';
import NotFoundPage from '../pages/NotFound/NotFound';

class App extends React.Component {
  state = {
    project1: {
      website: 'moviefan',
      title: 'moviefan - movie searching app based on React',
      img: 'project1-min.png',
      about:
        'This is a movie searching app that helps you find information on any movie or tv show including info about cast. The app is built with React and TMDB api for fetching data about movies.',
      techSheet: ['React', 'Scss', 'Swiper JS', 'TMDB api'],
      websiteLink: 'https://moviefan.netlify.com',
      codeLink: 'https://github.com/nickshelenin/moviefan',
    },
    project2: {
      website: 'proclean',
      title: 'proClean is a cleaning company website',
      img: 'project2-min.png',
      about:
        'This is an informational website for fake company ProClean. All technologies that have been used in this project listed below.',
      techSheet: ['HTML', 'CSS', 'Scss', 'JavaScript', 'Swiper JS'],
      websiteLink: 'https://nickshelenin.github.io/proclean/',
      codeLink: 'https://github.com/nickshelenin/proClean',
    },
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/portfolio/1'>
            <ProjectPage data={this.state.project1} />
          </Route>
          <Route exact path='/portfolio/2'>
            <ProjectPage data={this.state.project2} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
