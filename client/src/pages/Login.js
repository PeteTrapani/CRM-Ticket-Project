import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";
import StyledHeader from "../styles/StyledHeader";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    
    <Wrapper>
      <StyledHeader bg='blue'>
      </StyledHeader>
      <Logo background='red'>
        <strong>Golden Ticket</strong>
      </Logo>
      
      
      <Divider></Divider>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <br />

          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
        ) } 
          <>
            <p>
              <Button color="third" onClick={() => setShowLogin(true)}>
              Admin Login
              </Button>
            </p>
          </>
      
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0px 0 16px;
  color: orange;
`;

const Wrapper = styled.section`
  max-width: 350px;
  margin: 40px auto;
  padding: 16px;
  background: papayawhip;

`;

const Divider = styled.hr`
  border: none;
  border-bottom: 3px solid #bbb;
  margin: 16px 0;
`;



export default Login;