import styled from "styled-components";
import background from "./Images/background.png";
import { ThemeProvider } from "./Context/ThemeContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SubmitButton from "./Components/SubmitButtonComponent";
import { useRef } from "react";

export default function App() {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <HelmetProvider>
      <Helmet>
        <title>lEARN REACT Wlth Deslgn + Code</title>
        <meta
          name="description"
          content="Learn design and code, by building real apps with React and Swift. Complete courses about the best tools."
        />
      </Helmet>
      <ThemeProvider>
        <Wrapper>
          <Background src={background} alt="background image" />
          <Title>Forward Ref</Title>
          <SubmitButton title="okay" ref={ref} />
        </Wrapper>
      </ThemeProvider>
    </HelmetProvider>
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
