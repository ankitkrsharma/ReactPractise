import "./TechPager.css";

export default function TechPager() {
  return (
    <div className="techpager-body">
      <div className="container">
        <div className="top">
          <div className="top-left">
            <div className="profile-pager">
              <img src="https://i.ibb.co/jPbVjBrr/photo.jpg" alt="Profile" />
              <div className="info-pager">
                <h1>Sonal Kumari</h1>
                <h2>Final Year Student</h2>
                <p>Kolkata, India</p>
                <p>sonalkumari2701@gmail.com</p>
                <p>9608793182</p>
              </div>
            </div>
          </div>
          <div className="top-right">
            <div className="logo">
              <img
                src="https://i.ibb.co/dwqkC5zL/cropped-logo-2-1.webp"
                alt="Logo"
              />
            </div>
            <div className="description">
              Passionate about Web Development, Java Programming and creating
              clean, user-friendly applications with modern technologies.
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="left-panel">
            <h2>Skills</h2>
            <div className="cert-box">
              <h3>My Skills & Interests</h3>
              <ul>
                <li>Frontend Web Development</li>
                <li>Java Programming</li>
                <li>Python Programming Basics</li>
                <li>Data Structures & Algorithms</li>
                <li>SQL Database Management</li>
              </ul>
            </div>
            <div className="quote-pager">
              "Learning and building modern applications with simple and clean
              design."
            </div>
          </div>

          <div className="right-panel">
            <h2>Projects</h2>
            <div className="project-box">
              <h3>Shortest Path Visualizer</h3>
              <ul>
                <li>Developed a shortest path visualization system using Dijkstra Algorithm.</li>
                <li>Designed responsive webpages using HTML, CSS and JavaScript.</li>
                <li>Implemented interactive UI for better user experience.</li>
                <li>Worked on Java and SQL based academic mini projects.</li>
              </ul>
            </div>

            <table className="skills-table">
              <thead>
                <tr>
                  <th>Technology</th>
                  <th>Level</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Java Spring Boot", "Beginner", 0],
                  ["DSA", "Beginner", 0],
                  ["Python", "Beginner", 0],
                  ["Java Core", "Beginner", 0],
                  ["SQL", "Beginner", 0],
                ].map(([tech, level, exp]) => (
                  <tr key={tech}>
                    <td>{tech}</td>
                    <td>{level}</td>
                    <td>{exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}