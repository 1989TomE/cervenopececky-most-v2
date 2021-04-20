import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  height?: string;
};

type StyleProps = Omit<Props, "children">;

const Widget = (props: Props) => {
  const { children, ...styleProps } = props;
  return <Wrapper {...styleProps}>{children}</Wrapper>;
};

const Wrapper = styled.div<StyleProps>`
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: ${(props) => props.height ?? undefined};
  margin-top: ${(props) => props.marginTop ?? undefined};
  margin-bottom: ${(props) => props.marginBottom ?? undefined};
`;

export default Widget;
