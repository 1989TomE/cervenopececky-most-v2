import styled, { css } from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <Wrapper>
      test
      <div>test</div>
      <div>
        bla<div className="test">bleeee</div>
      </div>
    </Wrapper>
  );
};

export default PageContainer;

export const Wrapper = styled.div`
  div {
    background-color: ${(props) => props.theme.colors.ocher};
    color: blue;
    font-size: 20px;

    > div {
      color: red;
    }
  }
`;
