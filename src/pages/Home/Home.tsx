import styled from "styled-components";
import HomeBackgroundImage from "../../../assets/webBackground.jpg";
import Landing from "./components/Landing";

const Home = () => {
  return (
    <Wrapper>
      <Landing />
      <Image src={HomeBackgroundImage} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
