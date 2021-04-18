import styled from "styled-components";
import homeBackgroundImage from "@root/assets/webBackground.jpg";
import PageTopPart from "@src/components/PageTopPart/PageTopPart";
import Navigation from "@src/components/Navigation/Navigation";

type Props = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <Wrapper>
      <div>
        <PageTopPart />
        <Navigation />
        <div>{children}</div>
      </div>
    </Wrapper>
  );
};

export default PageContainer;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeBackgroundImage});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;

  > div {
    margin: 0 auto;
    max-width: 800px;

    > div {
      display: flex;
    }
  }
`;
