import PageColumn from "@src/components/PageColumn/PageColumn";
import PageContainer from "@src/components/PageContainer/PageContainer";
import { Header } from "@src/components/Typography";

const WorkPlace = () => {
  return (
    <PageContainer>
      <PageColumn>
        <Header title="Moštárna" />
      </PageColumn>
      <PageColumn>
        <Header title="Moštárna" />
      </PageColumn>
    </PageContainer>
  );
};

export default WorkPlace;
