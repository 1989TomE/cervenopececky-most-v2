import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  isOnLeft?: boolean;
  isOnRight?: boolean;
};

const PageColumn = ({ children, isOnLeft, isOnRight }: Props) => {
  return (
    <Wrapper isOnLeft={isOnLeft} isOnRight={isOnRight}>
      {children}
    </Wrapper>
  );
};

export default PageColumn;

const Wrapper = styled.div<Props>`
  flex: 1;
  margin-left: ${(props) => (props.isOnRight ? "1rem" : 0)};
  margin-right: ${(props) => (props.isOnLeft ? "1rem" : 0)};
`;
