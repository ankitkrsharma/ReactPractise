import { useSelector } from "react-redux";

export default function SummaryHeader() {
  const tickets = useSelector(
    (state) => state.tickets.AllTickets
  );

  return (
    <div>
      <h2>Summary</h2>

      <p>Total : {tickets.length}</p>

      <p>
        Open :
        {
          tickets.filter(
            (t) => t.status === "Open"
          ).length
        }
      </p>

      <p>
        In Progress :
        {
          tickets.filter(
            (t) => t.status === "In Progress"
          ).length
        }
      </p>

      <p>
        Resolved :
        {
          tickets.filter(
            (t) => t.status === "Resolved"
          ).length
        }
      </p>

      <p>
        Starred :
        {
          tickets.filter(
            (t) => t.starred
          ).length
        }
      </p>
    </div>
  );
}