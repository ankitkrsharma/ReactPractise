function SkillTable({ userData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Technology</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {userData.skills &&
          userData.skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.technology}</td>
              <td>{skill.details}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default SkillTable;