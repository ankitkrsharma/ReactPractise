import { useSelector, useDispatch } from "react-redux";

import {
    changeStatus,
    changePriority,
    toggleStar
} from "./ticketsSlice";

export default function ActionPanel() {

    const dispatch = useDispatch();

    const tickets = useSelector(
        (state) => state.tickets.AllTickets
    );

    const selectedTicketId = useSelector(
        (state) => state.tickets.selectedTicketId
    );

    console.log("Selected Id :", selectedTicketId);

    const ticket = tickets.find(
        (t) => t.id === selectedTicketId
    );


    if (!ticket) {
        return (
            <h3>Select Ticket First</h3>
        );
    }

    return (
        <div>

            <h2>Action</h2>

            <p>status</p>

            <select
                value={ticket.status} onChange={(e) => {
                    dispatch(
                        changeStatus({
                            id: ticket.id,
                            status: e.target.value
                        }))

                }}
            >

                <option>open</option>

                <option>in progress</option>

                <option>resolved</option>

            </select>



            <p>priority</p>

            <select
                value={ticket.priority} onChange={(e) => {
                    dispatch(
                        changePriority({
                            id: ticket.id,
                            priority: e.target.value
                        })
                    );
                }}
            >

                <option>Low</option>

                <option>Medium</option>

                <option>High</option>

            </select>

            <button onClick={() => {
                dispatch(
                    toggleStar(ticket.id)
                );
            }}
            >
                
                {ticket.starred ? "Unstar" : "Star"}

            </button>

        </div>
    );
}