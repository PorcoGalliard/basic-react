import { useState, useEffect } from "react";
import styled from "styled-components";

export default function MainButton() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <Wrapper>
        <Button onClick={increment}>You've clicked {count} times</Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const Button = styled.button`
  background: ${(props) =>
    props.disabled
      ? "grey"
      : "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)"};
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`;
