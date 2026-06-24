import React from "react";

export default function Ticket({ ticket, onResolve }) {
  return (
    <div style={{border: "1px solid black".at, padding: "10px", margin: "10px", }}>
      <h3>{ticket.title}</h3>

      {ticket.resolved ? (
        <>
          <p>Resolved</p>
          <p>Resolved At: {ticket.time}</p>
        </>
      ) : (
        <button onClick={() => onResolve(ticket.id)}>
          Mark as Resolved
        </button>
      )}
    </div>
  );
}