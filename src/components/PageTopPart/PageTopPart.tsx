import styled from "styled-components";
import { default as Instagram } from "@root/assets/instagram.svg";
import { default as Facebook } from "@root/assets/facebook.svg";
import polabi from "@root/assets/polabi.png";
import eu from "@root/assets/eu.png";
import { theme } from "@src/styles/theme";

const PageTopPart = () => {
  return (
    <Wrapper>
      <div>
        <Facebook
          style={{ fill: theme.colors.redDark }}
          alt="facebook"
          className="facebook"
        />
        <Instagram
          style={{ fill: theme.colors.redDark }}
          alt="instagram"
          className="instagram"
        />
        <div className="phoneNumber">+420 604 402 763</div>
      </div>
      <div>
        <img src={polabi} alt="polabi" className="polabi" />
        <img src={eu} alt="EU" className="eu" />
      </div>
    </Wrapper>
  );
};

export default PageTopPart;

const Wrapper = styled.div`
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    color: ${(props) => props.theme.colors.redLight};
    height: 6rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  > img {
    height: 6rem;
  }

  .facebook {
    margin-left: -2rem; // compensation for svg padding
    height: 6rem;
  }

  .instagram {
    height: 6rem;
  }

  .phoneNumber {
    margin-left: 1.5rem;
    font-size: 15px;
  }

  .polabi {
    height: 4rem;
    margin-right: 2rem;
  }

  .eu {
    height: 3.5rem;
  }
`;
