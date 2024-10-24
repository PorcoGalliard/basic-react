import React from "react";
import styled from "styled-components";

const InputField = (): React.JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <Input onChange={handleChange} placeholder="Input" />;
};

export default InputField;

const Input = styled.input`
  font-family: "Roboto";
  padding: 12px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid black;
  font-weight: 200;
  width: 205px;

  :focus {
    outline: 0;
    transition: 0.4s;
    background-color: #ffe54c;
  }
`;
