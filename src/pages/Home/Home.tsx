import { useState } from "react";
import styled from "styled-components";
import HomeImage from "../../../assets/CPmost_web_bckg2.jpg";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image src={HomeImage} onLoad={() => setLoaded(true)} loaded={loaded} />
  );
};

export default Home;

const Image = styled.img<{ loaded: boolean }>`
  @keyframes fadeIn {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }

  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.loaded ? "block" : "none")};
  animation-name: "fadeIn";
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
`;
