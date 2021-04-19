import PageColumn from "@src/components/PageColumn/PageColumn";
import PageContainer from "@src/components/PageContainer/PageContainer";
import { Header, Text } from "@src/components/Typography";
import TextContent from "./components/TextContent";
import workplace from "@root/assets/mostarnaPortait.jpg";
import PagePortraitImage from "@src/components/PagePortraitImage/PagePortraitImage";
import styled from "styled-components";
import HomeNavigation from "@src/components/Navigation/HomeNavigation";

const WorkPlace = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="columnContainer">
          <PageColumn isOnLeft>
            <Header title="Moštárna" />
            <TextContent />
          </PageColumn>
          <PageColumn isOnRight>
            <PagePortraitImage src={workplace} />
          </PageColumn>
        </div>
        <div>
          <HomeNavigation />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default WorkPlace;

const Wrapper = styled.div`
  flex: 1;
  height: 100%;

  .columnContainer {
    display: flex;
  }

  .navigationContainer {
  }
`;
