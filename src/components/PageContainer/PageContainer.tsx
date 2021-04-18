import styled from "styled-components";
import homeBackgroundImage from "@root/assets/webBackground.jpg";
import PageTopPart from "@src/components/PageTopPart/PageTopPart";
import Navigation from "@src/components/Navigation/Navigation";
import { pageHeight } from "@src/styles/page";

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
  height: ${pageHeight}px;
  background-image: url(${homeBackgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  > div {
    margin: 0 auto;
    max-width: 960px;

    > div {
      display: flex;
    }
  }
`;
