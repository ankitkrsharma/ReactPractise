function LeftPanel({ userData }) {
  return (
    <div className="left-panel">
      <h2>Certifications</h2>

      <div className="cert-box">
        <h3>My Certifications</h3>

        <ul>
          {(userData?.certifications || "")
            .split("\n")
            .filter((cert) => cert.trim() !== "")
            .map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
        </ul>
      </div>

      <div className="quote">
        "Turning ideas into scalable and impactful technology solutions"
      </div>
    </div>
  );
}

export default LeftPanel;