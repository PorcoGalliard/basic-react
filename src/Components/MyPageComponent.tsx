import { useRef } from "react";
import styled from "styled-components";
import useOnScreen from "../Hook/useOnScreen";
import Raphael from "../Images/raphael.jpg";

interface ImageProps {
  isVisible: boolean;
}

export default function MyPage() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <>
      <Wrapper ref={ref}>
        <Image src={Raphael} isVisible={isVisible} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Image = styled.img<ImageProps>`
  transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: ${(props) => (props.isVisible ? "static" : "none")};
  animation: ${(props) => props.isVisible && "scale 5s 1"};

  @keyframes scale {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;
