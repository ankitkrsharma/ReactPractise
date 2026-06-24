export default function EmployeeList({
  employees,
  onStatusChange,
}) {
  if (employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>

            <td>{employee.team}</td>

            <td>{employee.status}</td>

            <td>
              <button
                onClick={() =>
                  onStatusChange(
                    employee.id,
                    "Going"
                  )
                }
              >
                Going
              </button>

              <button
                onClick={() =>
                  onStatusChange(
                    employee.id,
                    "Not Going"
                  )
                }
              >
                Not Going
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}