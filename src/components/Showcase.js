import React from 'react';
import './Showcase.css';
import Logo from '../images/logo.png';

function Showcase() {
  return (
    <div className="showcase-container">
      <div className="showcase-content-box">
        <div className="video-box">
          {/* <video /> */}
          <iframe
            width="686"
            height="600"
            src="https://www.youtube.com/embed/PmofaZ2akAo?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="desc-box">
          <h3 className="desc-title">
            what is<br></br> DESIGN EXPRESS?
          </h3>
          <div className="desc-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="desc-list">
            <li>Industrial solutions built by users</li>
            <li>Easily create on the web</li>
            <li>Share with users</li>
            <li>Extensions optimized for digital twins</li>
          </ul>
          <button className="showcase-btn">SHOWCASE</button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
