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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  span {
    color: transparent;
  }
`;
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },
};

function GesturesPage() {
  return (
    <Wrapper>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      />
      <div></div>
    </Wrapper>
  );
}

export default GesturesPage;
