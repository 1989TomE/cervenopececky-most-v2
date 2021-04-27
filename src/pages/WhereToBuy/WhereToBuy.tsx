import { Column, ColumnsWrapper } from "@src/components/PagesContent/Layout";
import PageWrapper from "@src/components/PagesContent/Layout/Page";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

const WhereToBuy = () => {
  return (
    <PageWrapper>
      <ColumnsWrapper>
        <Column isOnLeft>
          <LeftColumn />
        </Column>

        <Column isOnRight>
          <RightColumn />
        </Column>
      </ColumnsWrapper>
    </PageWrapper>
  );
};

export default WhereToBuy;
