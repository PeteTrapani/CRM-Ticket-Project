import styled from "styled-components";

function Error({ children }) {
  return (
    <Wrapper>
      <Message>{children}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: black;
  border-radius: 6px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;