import PageColumn from "@src/components/PageColumn/PageColumn";
import PageContainer from "@src/components/PageContainer/PageContainer";
import { Header, Text } from "@src/components/Typography";
import TextContent from "./components/TextContent";
import workplace from "@root/assets/mostarnaPortait.jpg";
import PagePortraitImage from "@src/components/PagePortraitImage/PagePortraitImage";

const WorkPlace = () => {
  return (
    <PageContainer>
      <PageColumn isOnLeft>
        <Header title="Moštárna" />
        <TextContent />
      </PageColumn>

      <PageColumn isOnRight>
        <PagePortraitImage src={workplace} />
      </PageColumn>
    </PageContainer>
  );
};

export default WorkPlace;
