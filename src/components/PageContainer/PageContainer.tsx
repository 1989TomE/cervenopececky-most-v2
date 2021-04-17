import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.ocher};
`;
