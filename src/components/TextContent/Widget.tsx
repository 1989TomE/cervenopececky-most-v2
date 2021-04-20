import styled from "styled-components";

const Widget = styled.div`
  padding: 3rem;
  margin: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Widget;
