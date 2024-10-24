import styled from "styled-components";
import InputField from "./InputComponent";
import SubmitButton from "./SubmitButtonComponent";
import React from "react";

const Form = (): React.JSX.Element => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputField />
      <SubmitButton />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: grid;
  gap: 10px;
`;

export default Form;
