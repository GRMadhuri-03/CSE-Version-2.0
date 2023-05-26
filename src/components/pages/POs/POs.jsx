import React from 'react';
import './POs.css';
export default function POs() {
  return (
    <>
      <h1 className="consulting">POs</h1>
    </>
  );
  return (
    <>
      {/* <Navbar /> */}
      <div className="main-box">
        <div className="side-box">
          <div className="side-container">
            <div className="side-top-box">
              <p>About US</p>
            </div>

            <ul className="side-link">
              <li>
                <div className="side-border-left" />
                <Link to="/VisionAndMission">History</Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/VisionAndMission">Vision And Mission</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/POs">POs,PEOs,PSOs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="drops">
          <h3>Vision</h3>
        </div>
      </div>
      {/* <h1 className="consulting">Publications</h1> */}
      {/* <Footer /> */}
    </>
  );
}
