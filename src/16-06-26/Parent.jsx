import React, { useState } from "react";
import Ticket from "./Ticket";

export default function Parents() {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Login Issue", resolved: false, time: "" },
        { id: 2, title: "Payment Failure", resolved: false, time: "" },
        { id: 3, title: "Dashboard Crash", resolved: false, time: "" },
    ]);

    function handleResolve(id) {
        setTickets(
            tickets.map((ticket) =>
                ticket.id === id ? { ...ticket, resolved: true, time: new Date().toLocaleTimeString(), } : ticket)
        );
    }

    const resolvedCount = tickets.filter((ticket) => ticket.resolved).length;

    return (
        <div>
            <h1>Support Dashboard</h1>
            <h3>Total Tickets: {tickets.length}</h3>
            <h3>Resolved Tickets: {resolvedCount}</h3>

            {tickets.map((ticket) => (
                <Ticket key={ticket.id} ticket={ticket} onResolve={handleResolve} />
            ))}

            {(resolvedCount === tickets.length) ? (
                <h2> All tickets resolved </h2>
            ) : null}
        </div>
    );
}

