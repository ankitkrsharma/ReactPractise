import { useSelector } from "react-redux";

export default function TicketDetails() {
    const tickets = useSelector(
        (state) => state.tickets.AllTickets
    );

    const selectedTicketId = useSelector(
        (state) => state.tickets.selectedTicketId
    );

    const ticket = tickets.find(
        (t) => t.id === selectedTicketId
    );

    if (!ticket) {
        return <h2>Select a Ticket</h2>;
    }

    return (
        <div>
            <h2>{ticket.issueTitle}</h2>

            <p>{ticket.customerName}</p>
            <p>{ticket.description}</p>

            <p>{ticket.status}</p>

            <p>{ticket.priority}</p>
            <p>{ticket.assignedTo}</p>

            <p>Starred:{ticket.starred ? " Yes - ⭐" : " No- ☆"} </p>
        </div>
    );
}