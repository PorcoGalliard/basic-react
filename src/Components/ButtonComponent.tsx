import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function MainButton() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref) {
      console.log(ref.current?.click());
    }
  }, []);
  return (
    <>
      <Wrapper>
        <Button ref={ref} onClick={() => alert("Clicked")}>
          Click Me
        </Button>
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
