import React, { useState } from 'react';
import './VisionAndMission.css';
import { Link } from 'react-router-dom';
export default function VisionAndMission() {
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
                <Link to="/History">History</Link>
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
          <div class="title-section text-center about1">
            <span></span>
          </div>
          <div class="row about2">
            <div class="col-md-12">
              <p className="p2">
                To promote Research and Development in the frontier areas of
                Computer Science & Engineering. To generate Competent
                Professionals to become part of the industry and Research
                Organizations at the National and International levels. To
                provide necessary strengths to enable the students to Innovate
                and to become Entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="consulting">Publications</h1> */}
      {/* <Footer /> */}
    </>
  );
}
