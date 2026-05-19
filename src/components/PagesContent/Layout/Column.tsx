import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  isOnLeft?: boolean;
  isOnRight?: boolean;
  className?: string;
};

const PageColumn = ({ children, isOnLeft, isOnRight, className }: Props) => {
  return (
    <Wrapper
      className={className}
      isOnLeft={isOnLeft}
      isOnRight={isOnRight}
    >
      {children}
    </Wrapper>
  );
};

export default PageColumn;

const Wrapper = styled.div<Props>`
  flex: 1;
  margin-left: ${(props) => (props.isOnRight ? "2rem" : 0)};
  margin-right: ${(props) => (props.isOnLeft ? "2rem" : 0)};

  ${tabletMediaQuery} {
    margin-bottom: 2rem;
    margin-left: 0rem;
    margin-right: 0rem;
    flex-direction: column;
  }
`;
