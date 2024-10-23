import styled from "styled-components";
import useTheme, { themes } from "../Context/ThemeContext";

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
  background?: string;
}

export default function MainButton({ buttonType }: ButtonProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Wrapper>
        <Button
          color={theme.foreground}
          background={theme.background}
          type={buttonType}
          onClick={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
          }
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

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.background};
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: ${(props) => props.color};
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`;
