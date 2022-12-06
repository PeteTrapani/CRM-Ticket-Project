import React from 'react'


function Tickets(props) {
  return (
    <div>
        <h1>tickets api</h1>
        {props.tickets.map((ticket) => {
            return ( 
                <div key={ticket.id}>
                    <h2>{ticket.title}</h2>
                    <p>{ticket.issue}</p>
                </div>
    
  )
})}
</div>
);
}
export default Tickets