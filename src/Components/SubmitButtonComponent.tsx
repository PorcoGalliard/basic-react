import React from "react";
import styled from "styled-components";

const SubmitButton = (): React.JSX.Element => {
  const handleClick = () => {
    console.log("Oh okey");
  };

  return (
    <Button type="submit" onClick={handleClick}>
      Submit
    </Button>
  );
};

export default SubmitButton;

const Button = styled.button`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);

  ::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  :hover::after {
    top: 0px;
    left: 0px;
  }
`;
