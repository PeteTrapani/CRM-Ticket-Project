import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {

  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Golden Ticket</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Ticket
        </Button>
        <div>
          <h1>Tickets</h1>
          
        </div>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-size: 3rem;
  margin: 0;
  line-height: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: grid;
  gap: 4px;
  position: absolute;
  right: 80px;
  margin-top: 1200px;
`;

export default NavBar;