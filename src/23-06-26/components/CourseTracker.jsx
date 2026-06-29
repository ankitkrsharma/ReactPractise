import "./CourseTracker.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCourses, updateCourse } from "./api";

function CourseTracker() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const mutation = useMutation({
    mutationFn: updateCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error loading courses.</h2>;

  const courses = data.data;

  const getColor = (status) => {
    if (status === "Completed") return "green";
    if (status === "In Progress") return "amber";
    return "red";
  };

  const getRemark = (status) => {
    if (status === "Completed") return "Green";
    if (status === "In Progress") return "Amber";
    return "Red";
  };

  const handleChange = (course, status) => {
    mutation.mutate({
      ...course,
      status,
    });
  };

  return (
    <div className="container">
      <h1>Course Progress Tracker</h1>

      <div className="objective">
        <h3>Objective</h3>
        <p>
          Maintain a list of courses and track student progress using a
          color-coded system.
        </p>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>

        <ul>
          <li>Maintain a list of assigned courses.</li>
          <li>Completed → Green</li>
          <li>In Progress → Amber</li>
          <li>Not Started → Red</li>
        </ul>
      </div>

      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Change Status</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className={getColor(course.status)}>
              <td>{course.name}</td>

              <td>
                {course.status === "Completed"
                  ? "✔ Completed"
                  : course.status}
              </td>

              <td>{getRemark(course.status)}</td>

              <td>
                <select
                  value={course.status}
                  onChange={(e) =>
                    handleChange(course, e.target.value)
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