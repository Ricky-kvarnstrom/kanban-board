import React from "react";
import "./Ticket.scss";

type Props = {};

export default function Ticket({}: Props) {
  return (
    <div className="ticket">
      <h3>this is a ticket</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>3 subtasks</p>
    </div>
  );
}
