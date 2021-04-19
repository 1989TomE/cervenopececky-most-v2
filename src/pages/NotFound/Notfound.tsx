import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper>{`
  Omlouváme se,
  stránka nebyla nalezena :-(
  `}</Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  font-family: "barlow";
  color: ${(props) => props.theme.colors.redLight};
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
