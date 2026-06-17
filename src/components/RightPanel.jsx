import SkillTable from "./SkillTable";

function RightPanel({ userData }) {
  return (
    <div className="right-panel">
      {userData.workedOnProject === "Yes" && (
        <>
          <h2>Key Projects</h2>

          <div className="project-box">
            <h3>{userData.projectTitle}</h3>

            <ul>
              <li>{userData.projectDetails}</li>
            </ul>
          </div>
        </>
      )}

      <SkillTable userData={userData} />
    </div>
  );
}

export default RightPanel;