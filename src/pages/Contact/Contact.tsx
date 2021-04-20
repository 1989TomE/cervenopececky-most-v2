import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";

const Contact = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <LeftColumn />
          </Column>

          <Column isOnRight>
            <RightColumn />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default Contact;
