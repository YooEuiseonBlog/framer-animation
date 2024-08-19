import { Link } from "react-router-dom";
import styled from "styled-components";

const WhiteText = styled.span`
  color: white;
`;

function Home() {
  return (
    <div>
      <WhiteText as="h1">Home Page입니다.</WhiteText>
      <ul>
        <li>
          <Link to={`variants`}>
            <WhiteText>VaraiantsPage</WhiteText>
          </Link>
        </li>
        <li>
          <Link to={`variants2`}>
            <WhiteText>VaraiantsPage2</WhiteText>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
