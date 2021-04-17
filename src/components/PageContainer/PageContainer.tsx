import styled from "styled-components";

const PageContainer = () => {
  return <Div>content</Div>;
};

export default PageContainer;

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.ocher};
  font-family: "robotoBold";
`;
