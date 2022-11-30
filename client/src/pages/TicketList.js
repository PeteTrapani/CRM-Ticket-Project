import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function TicketList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <Wrapper>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Recipe key={recipe.id}>
            <Box>
              <h2>{recipe.title}</h2>
              <p>
                <p> <strong>{recipe.user.username}</strong></p>
              </p>
              <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
            </Box>
          </Recipe>
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

const Recipe = styled.article`
margin-top: 20px;  
margin-bottom: 24px;
margin-left: 20px;
background-color: orange;
`;

export default TicketList;