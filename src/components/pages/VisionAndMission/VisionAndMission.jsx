import React from 'react';
import './VisionAndMission.css';
// export default function VisionAndMission() {
//   return (
//     <>
//       <h1 className="consulting">VisionAndMission</h1>
//     </>
//   );
// }
import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>History</h2>
            </div>
            <div className="col-md-6">
              <p>Content for the history section goes here...</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Mission</h2>
              <p>Content for the mission section goes here...</p>
            </div>
            <div className="col-md-6">
              <img src="mission-image.jpg" alt="Mission" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="vision-image.jpg" alt="Vision" />
            </div>
            <div className="col-md-6">
              <h2>Vision</h2>
              <p>Content for the vision section goes here...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
