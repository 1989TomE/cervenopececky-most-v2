import styled from "styled-components";
import PageHeader from "./PageHeader";

type Props = {
  withPageHeader: boolean;
  children: React.ReactNode;
};

export const ContentWrapper = ({ children, withPageHeader }: Props) => {
  return (
    <Wrapper>
      {withPageHeader && (
        <div className="pageHeader">
          <PageHeader />
        </div>
      )}
      <div className="content">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default ContentWrapper;
