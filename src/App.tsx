import styled from "styled-components";
import background from "./Images/background.png";
import SignInForm from "./Components/SignInFormComponent";

export default function App() {
  return (
    <>
      <Wrapper>
        <Background src={background} alt="background image" />
        <Title>Sign In</Title>
        <SignInForm />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
