import React, { Component } from 'react';
import Footer from '../../../components/Footer/Footer';
import './Project.scss';

export class Project extends Component {
  render() {
    const data = this.props.data;
    const img = data.img;
    
    return (
      <div className='page project-page'>
        <div className='project-title-container'>
          <h1>{data.website}</h1>
          <p>{data.title}</p>

          <div className='project-links'>
            <a href={data.websiteLink} target='_blank' className='project-link project-link--green'>
              visit the website
            </a>
            <a href={data.codeLink} target='_blank' className='project-link project-link--red'>
              view the code
            </a>
          </div>
        </div>

        <div className='project-img'>
          <img src={'/img/' + img} alt='' />
        </div>

        <div className='about-project-container'>
          <h1>About this project</h1>
          <hr align='left' />
          <p>{data.about}</p>
        </div>

        <div className='tech-sheet-container'>
          <h1>Techinal Sheet</h1>
          <p className='subtitle'>Web technologies that have been used in this project</p>
          <hr align='left' />
          <ul>
            {data.techSheet.map(tech => {
              return <li>{tech}</li>;
            })}
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Project;
