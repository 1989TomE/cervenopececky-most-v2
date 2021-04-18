import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const PageColumn = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageColumn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
