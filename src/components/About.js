import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>NEXIVIL</h1>
        <h2>
          To the Next
          <br />
          Civil
          <br />
          Engineering
        </h2>
        <hr />
        <p>
          Design automation consulting company NEXIVIL
          <br />
          We will increase the efficiency of your design work{' '}
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h3>Join the team</h3>
          <span>
            Through the fusion of the latest
            <br />
            web technology and the oldest.
          </span>
          <button>Apply</button>
        </div>
        <div className="card">
          <h3>Investor & Partner</h3>
          <span>
            Through the fusion of the latest
            <br />
            web technology and the oldest.
          </span>
          <button>Contact N</button>
        </div>
      </div>
    </div>
  );
}

export default About;
