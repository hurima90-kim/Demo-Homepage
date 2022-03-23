import React from 'react';
import './Trending.css';

function Trending() {
  return (
    <div className="trend-container">
      <div className="trend-content">
        <h3 className="trend-title">Trending</h3>
        <div>
          <div className="content-box">
            <h3 className="sub-title">Plant&Construction</h3>
            <ul>
              <li>Real-time Monitoring & Analysis</li>
              <li>Digital mock-up for User</li>
            </ul>
          </div>
          <div className="content-box">
            <h3 className="sub-title">Engineering</h3>
            <ul>
              <li>Parametric 3D-modeling</li>
              <li>Auto-drawing</li>
              <li>auto-generating calulations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
