import styled from "styled-components";
import useInput from "../Hook/useInput";
import MainButton from "./ButtonComponent";
import React from "react";

export default function SignInForm() {
  const email = useInput("");
  const password = useInput("");

  const isButtonActive =
    email.value.trim() !== "" && password.value.trim() !== "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={email.value}
          onChange={email.onClick}
        />
        <Input
          placeholder="Password"
          value={password.value}
          onChange={password.onClick}
        />
        <MainButton isActive={isButtonActive} buttonType="submit" />
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.form`
  display: grid;
  justify-items: center;
  gap: 20px;
  padding-bottom: 50px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  padding: 10px 20px;
  background-blend-mode: overlay;
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.4);

  :focus {
    outline: none;
  }
`;
