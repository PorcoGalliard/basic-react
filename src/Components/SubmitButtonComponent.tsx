import React, { forwardRef } from "react";
import styled from "styled-components";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ title }, ref) => {
    return <Wrapper ref={ref}>{title}</Wrapper>;
  }
);

const Wrapper = styled.button`
    display: grid;
    background: #FFFFFF
    place-items: center;
`;

export default SubmitButton;
