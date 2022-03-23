import React from 'react';
import './Demo.css';

import ListGraph from '../images/litegraph.png';

function Demo() {
  return (
    <div className="demo-container">
      <div className="demo-image">
        <div className="image-box">
          <div className="image">
            <img src={ListGraph} alt="DX" />
          </div>
        </div>
      </div>
      <section>
        <div className="demo-desc">
          <div className="demo-desc-box">
            <h2>
              No-code
              <br />
              development
              <br />
              environment
            </h2>
            <p>
              Even novice developers can easily build
              <br />
              web-based solutions.
              <br />
              Deploy and connect nodes.
            </p>
          </div>
          <div className="demo-desc-box second">
            <h2>
              Auto-Generate
              <br />
              Report
            </h2>
            <p>
              Calculations required for engineering and
              <br />
              Reports on data analysis results can be
              <br />
              automatically generated.
            </p>
          </div>
          <div className="demo-desc-box third">
            <h2>Auto Drawing</h2>
            <p>
              Drawings associated with parametric 3D models
              <br />
              can be automatically created.
              <br />
              You can download an autogenerated CAD
              <br />
              calculator directly from the platform.
            </p>
          </div>
          {/* <div className="demo-desc-box four">
            <h2>Digital Mock-up</h2>
            <p>
              Pre-create your products online and share them
              <br />
              with other users.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Demo;