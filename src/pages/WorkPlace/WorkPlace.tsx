import TextContent from "./components/TextContent";
import workplace from "@root/assets/mostarna.jpg";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";

const WorkPlace = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader>
        <ColumnsWrapper>
          <Column isOnLeft>
            <TextContent />
          </Column>

          <Column isOnRight>
            <PageImage src={workplace} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default WorkPlace;
