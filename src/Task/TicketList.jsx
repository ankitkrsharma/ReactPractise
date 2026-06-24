import { useSelector, useDispatch } from "react-redux";
import { selectTicket } from "./ticketsSlice";

export default function TicketList() {
    const dispatch = useDispatch();

    const tickets = useSelector(
        (state) => state.tickets.AllTickets
    );

    const currentFilter = useSelector(
        (state) => state.tickets.currentFilter
    );

    const filteredTickets =
        currentFilter === "All"
            ? tickets
            : tickets.filter(
                (ticket) =>
                    ticket.status === currentFilter
            );

    return (
        <div>
            {filteredTickets.map((ticket) => (<div key={ticket.id} onClick={() => dispatch(
                selectTicket(ticket.id)
            )

            }
            >
                <h3>{ticket.issueTitle}</h3>

                <p>{ticket.customerName}</p>

                <p>{ticket.status}</p>

                <hr />
            </div>
            ))}
        </div>
    );
}