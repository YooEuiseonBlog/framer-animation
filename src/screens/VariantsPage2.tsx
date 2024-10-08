import styled from "styled-components";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; BackButton 위치 조정을 위한 relative 포지션 */
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 20px; /* 위에서 20px 아래로 */
  left: 20px; /* 왼쪽에서 20px 오른쪽으로 */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  span {
    color: transparent;
  }
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  place-self: center;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function VariantsPage2() {
  return (
    <Wrapper>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
      <div></div>
    </Wrapper>
  );
}

export default VariantsPage2;
