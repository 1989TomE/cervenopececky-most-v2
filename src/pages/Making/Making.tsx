import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import TextContent from "./components/TextContent";
import making from "@root/assets/vyrabime.jpg";

const Making = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader={true}>
        <ColumnsWrapper>
          <Column isOnLeft>
            <TextContent />
          </Column>

          <Column isOnRight>
            <PageImage src={making} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Making;
