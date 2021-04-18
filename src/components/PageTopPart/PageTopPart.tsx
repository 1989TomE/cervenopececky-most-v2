import styled from "styled-components";
import instagram from "@root/assets/instagram.svg";
import facebook from "@root/assets/facebook.svg";
import polabi from "@root/assets/polabi.png";
import eu from "@root/assets/eu.png";

const PageTopPart = () => {
  return (
    <Wrapper>
      <div>
        <img src={facebook} alt="facebook" className="facebook" />
        <img src={instagram} alt="instagram" className="instagram" />
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
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    color: ${(props) => props.theme.colors.redDark};
    height: 6rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  > img {
    height: 6rem;
  }

  .facebook,
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
