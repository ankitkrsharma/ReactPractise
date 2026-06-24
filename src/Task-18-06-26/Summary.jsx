export default function Summary({ employees }) {
  const total = employees.length;

  const going = employees.filter(
    (emp) => emp.status === "Going"
  ).length;

  const notGoing = employees.filter(
    (emp) => emp.status === "Not Going"
  ).length;

  const pending = employees.filter(
    (emp) => emp.status === "Pending"
  ).length;

  return (
    <div>
      <h2>Summary</h2>

      <p>Total Employees: {total}</p>

      <p>Going: {going}</p>

      <p>Not Going: {notGoing}</p>

      <p>Pending: {pending}</p>
    </div>
  );
}