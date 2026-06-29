import useCourseStore from "./courseStore";
import "./CourseTracker.css";
function CourseTracker() {
  const { courses, changeStatus } = useCourseStore();
  return (
    <div className="container">
      <h1>Course Progress Tracker</h1>

      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className={
                course.status === "Completed"
                  ? "green"
                  : course.status === "In Progress"
                  ? "amber"
                  : "red"
              }
            >
              <td>{course.name}</td>

              <td>
                {course.status === "Completed"
                  ? "✔ Completed"
                  : course.status}
              </td>

              <td>
                <select
                  value={course.status}
                  onChange={(e) =>
                    changeStatus(course.id, e.target.value)
                  }
                >
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Not Started</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CourseTracker;