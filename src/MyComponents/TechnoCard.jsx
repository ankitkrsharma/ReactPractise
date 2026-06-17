import "../css/TechnoCard.css";

const TechnoCard = ({ onQRClick }) => {
  return (
    <div className="card">
      <div className="top">
        <div className="left">
          <img
            src="https://i.ibb.co/prx8XqZC/new-pic.jpg"
            className="profile"
            alt=""
          />

          <h1>Ankit Kumar Sharma</h1>
          <h3>Software Engineer</h3>

          <p>Kolkata, India</p>
          <p>ankitk342@gmail.com</p>
          <p>900050000005</p>
        </div>

        <div className="right">
          <img
            src="https://i.ibb.co/dwqkC5zL/cropped-logo-2-1.webp"
            className="logo"
            alt=""
          />
        </div>
      </div>

      <div className="bottom">
        <div className="qr">
          <img
            src="https://i.ibb.co/5xgTsrNN/Whats-App-Image-2026-05-27-at-00-15-50.jpg"
            alt=""
            onClick={onQRClick}
          />

          <h2>Scan For MyTechnoPager</h2>
        </div>

        <div className="tabledata">
          <table>
            <thead>
              <tr>
                <th>Technology</th>
                <th>Level</th>
                <th>Experience</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Java</td>
                <td>Beginner</td>
                <td>0</td>
              </tr>

              <tr>
                <td>SpringBoot</td>
                <td>Beginner</td>
                <td>0</td>
              </tr>

              <tr>
                <td>Python</td>
                <td>Beginner</td>
                <td>0</td>
              </tr>

              <tr>
                <td>MySql</td>
                <td>Beginner</td>
                <td>0</td>
              </tr>

              <tr>
                <td>ML</td>
                <td>Beginner</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnoCard;