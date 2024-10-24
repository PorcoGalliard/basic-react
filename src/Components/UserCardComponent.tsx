import React, { useEffect } from "react";
import styled from "styled-components";

const UserCard: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    console.log("User Card is rendered");
  },);

  return (
    <Wrapper>
      <Paragraph></Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 50px;
  color: #ffffff;
`;

export default UserCard;
