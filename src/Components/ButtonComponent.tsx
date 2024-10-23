import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
  buttonType?: "button" | "submit" | "reset";
}

export default function MainButton({ isActive, buttonType }: ButtonProps) {
  return (
    <>
      <Wrapper>
        <Button
          type={buttonType}
          isActive={isActive}
          onClick={() => alert("Clicked")}
        >
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

const Button = styled.button<{ isActive: boolean }>`
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)"
      : "grey"};
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`;
