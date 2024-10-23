import styled from "styled-components";
import NavigationButton from "./NavigationButtonComponent";
import { menuData } from "../Data/menuData";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <NavigationButton
          onClick={() => setIsOpen(!isOpen)}
          title="Menu"
          image="https://designcode.io/images/icons/courses.svg"
        />
        {isOpen && (
          <NavigationWrapper>
            {menuData.map((data, index) => {
              return (
                <NavigationButton
                  key={index}
                  title={data.title}
                  image={data.image}
                />
              );
            })}
          </NavigationWrapper>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const NavigationWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 20px 20px;
`;
