import "./TechnoCard.css";

export default function TechnoCard({ onQRClick }) {
  return (
    <div className="technocard-body">
      <div className="card">
        <div className="top-section">
          <div className="profile">
            <img src="https://i.ibb.co/jPbVjBrr/photo.jpg" alt="Profile" />
            <div>
              <div className="name">Sonal Kumari</div>
              <div className="role">Final Year Student</div>
            </div>
          </div>
          <div className="info">
            📍 Kolkata, India <br />
            ✉️ sonalkumari2701@gmail.com <br />
            📞 9608793182
          </div>
        </div>

        <div className="right-section">
          <div className="top-logo-center">
            <img
              src="https://i.ibb.co/dwqkC5zL/cropped-logo-2-1.webp"
              alt="IEM Logo"
            />
          </div>
          <div className="quote">
            "Institute of Engineering & Management <br />
            Good Education, Good Jobs"
          </div>
        </div>

        <div className="qr-section" onClick={onQRClick}>
          <img src="https://i.ibb.co/bM89x9XZ/qrcode.png" alt="QR Code" />
          <div className="qr-text">
            Scan For <br /> MytechPager
          </div>
        </div>

        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Technology</th>
                <th>Experience Level</th>
                <th>Years of Experience</th>
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
  );
}