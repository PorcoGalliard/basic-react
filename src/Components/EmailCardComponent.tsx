import React from "react";
import styled from "styled-components";

interface EmailProps {
  email: string;
}

const EmailCard: React.FC<EmailProps> = ({ email }): React.JSX.Element => {
  const isValidEmail = isEmail(email);

  return (
    <Wrapper>
      <Paragraph>Hello! My email is:</Paragraph>
      {isValidEmail ? (
        <Email href={`mailto:` + email}>{email}</Email>
      ) : (
        <Paragraph>Invalid email format</Paragraph> // Pesan jika email tidak valid
      )}
    </Wrapper>
  );
};

const isEmail = (email: string): boolean => {
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return regex.test(email);
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  min-height: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  background: radial-gradient(#fbc1cc, #fa99b2);

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: white;
`;

const Email = styled.a`
  font-size: 20px;
  color: white;
`;

export default EmailCard;
