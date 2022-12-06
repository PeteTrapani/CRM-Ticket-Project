import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import axios from "axios";
import Tickets from "../components/tickets";

const API_URL = "http://localhost:4000/api/v1/tickets";

function getAPIData() {
  return axios.get(API_URL).then((r) => r.data)
}

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/tickets")
      .then((r) => r.json())
      .then(setTickets);
  }, []);

  

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setTickets(items)
      }
      })
      return () => (mounted = false);
    }, []);

  return (
    <Wrapper>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <Ticket key={ticket.id}>
            <Box>
              <h2><Tickets tickets={tickets} /></h2>
            </Box>
          </Ticket>
        ))
      ) : (
        <>
          <h2>No Tickets Found</h2>
          <Button as={Link} to="/new">
            Make a New Ticket.
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 40%;
`;

const Ticket = styled.article`
margin-top: 20px;  
margin-bottom: 24px;
margin-left: 20px;
background-color: orange;
`;

export default TicketList;