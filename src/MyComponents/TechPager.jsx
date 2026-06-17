import "../css/TechPager.css";

const TechPager = () => {
  return (
    <div className="container">
      <div className="top">
        <div className="top-left">
          <div className="profile-section">
            <img
              src="https://i.ibb.co/prx8XqZC/new-pic.jpg"
              alt=""
            />

            <div>
              <h1>Ankit Kumar Sharma</h1>
              <h2>Software Engineer</h2>

              <p>Kolkata, India</p>
              <p>ankitk342@gmail.com</p>
              <p>9800003210</p>
            </div>
          </div>
        </div>

        <div className="top-right">
          <p>
            ML and Data Science enthusiast with experience in deep
            learning, research, and intelligent systems.
          </p>
        </div>
      </div>

      <div className="bottom">
        <div className="left-panel">
          <h2>Certifications</h2>

          <ul>
            <li>Database Management System - NPTEL</li>
            <li>Design and Analysis of Algorithms - NPTEL</li>
            <li>Big Data Computation - NPTEL</li>
            <li>Google Data Analytics - Coursera</li>
          </ul>
        </div>

        <div className="right-panel">
          <h2>Key Projects</h2>

          <div className="project-box">
            <h3>
              Lung Cancer Classification Dashboard
            </h3>

            <p>
              Full stack medical diagnostic dashboard using
              ResNet, Flask, Streamlit, MySQL and TensorFlow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPager;