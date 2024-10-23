import MainButton from "./ButtonComponent";
import styled from "styled-components";

export default function Card() {
  return (
    <>
      <Wrapper>
        This is my card
        <MainButton isActive={true} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  padding: 20px;
  width: 300px;
  height: 150px;
  display: grid;
  justify-items: center;
  align-items: start;
  font-family: Segoe UI, sans-serif;
  font-weight: bold;
`;
