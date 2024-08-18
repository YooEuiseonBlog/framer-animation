import styled from "styled-components";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* BackButton 위치 조정을 위한 relative 포지션 */
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 20px; /* 위에서 20px 아래로 */
  left: 20px; /* 왼쪽에서 20px 오른쪽으로 */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: white;
  }
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function VariantsPage() {
  return (
    <Wrapper>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <Box variants={myVars} initial="start" animate="end">
        <span>box</span>
      </Box>
      <div></div>
    </Wrapper>
  );
}

export default VariantsPage;
