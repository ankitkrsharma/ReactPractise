import { useState } from "react";
import "./UserForm.css";

function UserForm({ setUserData }) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailID: "",
    location: "",
    contactNumber: "",
    collegeName: "UEM",
    tagline: "",
    workedOnProject: "No",
    projectTitle: "",
    projectDetails: "",
    certifications: "",
  });

  const [skills, setSkills] = useState([]);

  const [skill, setSkill] = useState({
    technology: "Java",
    level: "Beginner",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addSkill = () => {
    let details = "";

    if (skill.technology === "Java") {
      details = `Java | ${skill.level}`;
    } else if (skill.technology === "React") {
      details = `JavaScript, TypeScript | ${skill.level}`;
    } else if (skill.technology === "AI") {
      details = `AI+ML | GenAI | Python+AI | ${skill.level}`;
    }

    const newSkill = {
      technology: skill.technology,
      details: details,
    };

    setSkills([...skills, newSkill]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      skills: skills,
    };

    console.log("Submitted Data:", data);

    setUserData(data);
  };

  return (
    <div className="form-container">
      <h1>My Tech Pager Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="emailID"
          placeholder="Email ID"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          onChange={handleChange}
          required
        />

        <select name="collegeName" onChange={handleChange}>
          <option value="UEM">UEM</option>
          <option value="IEM">IEM</option>
        </select>

        <textarea
          name="tagline"
          placeholder="Enter Tagline"
          onChange={handleChange}
        />

        <label>Worked On Project?</label>

        <select name="workedOnProject" onChange={handleChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        {formData.workedOnProject === "Yes" && (
          <>
            <input
              type="text"
              name="projectTitle"
              placeholder="Project Title"
              onChange={handleChange}
            />

            <textarea
              name="projectDetails"
              placeholder="Project Details"
              onChange={handleChange}
            />
          </>
        )}

        <hr />

        <h3>Certifications</h3>

        <textarea
          name="certifications"
          placeholder={`Database Management System - NPTEL`}
          onChange={handleChange}
          rows="5"
        />

        <hr />

        <h3>Add Skills</h3>

        <label>Technology</label>

        <select
          value={skill.technology}
          onChange={(event) =>
            setSkill({ ...skill, technology: event.target.value })
          }
        >
          <option value="Java">Java</option>
          <option value="React">React</option>
          <option value="AI">AI</option>
        </select>

        <label>Level</label>

        <select
          value={skill.level}
          onChange={(event) =>
            setSkill({ ...skill, level: event.target.value })
          }
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        <button type="button" onClick={addSkill}>
          Add Skill
        </button>

        <h4>Added Skills</h4>

        <ul>
          {skills.map((item, index) => (
            <li key={index}>
              {item.technology} - {item.details}
            </li>
          ))}
        </ul>

        <button type="submit">Generate MyTechPager</button>
      </form>
    </div>
  );
}

export default UserForm;