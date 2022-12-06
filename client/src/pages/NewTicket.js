import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label} from "../styles";
import TextArea from "../styles/TextArea";



function NewTicket({ user, addTicket }) {
  const [title, setTitle] = useState("Enter Ticket");
  const [issue, setIssue] = useState(
  


  );
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log(title, issue)
    fetch("/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        issue
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          addTicket(data)
          window.location.reload();
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
}
  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Ticket</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="issue">Issue</Label>
            <TextArea
              id="issue"
              rows="5"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Ticket"}
            </Button>
          </FormField>
          <FormField>
            {errors?.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewTicket;