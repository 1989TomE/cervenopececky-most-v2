import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  primaryColor?: boolean;
  bold?: boolean;
  paddingTop?: string;
  smallFontSize?: boolean;
};

type StyleProps = Omit<Props, "children">;

export const Paragraph = (props: Props) => {
  const { children, ...rest } = props;
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div<StyleProps>`
  font-family: ${(props) => (props.bold ? "robotoBold" : "roboto")};
  font-size: ${(props) =>
    props.smallFontSize
      ? props.theme.fontSize.small
      : props.theme.fontSize.normal};
  color: ${(props) =>
    props.primaryColor ? props.theme.colors.redLight : undefined};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "1rem")};
  text-align: justify;
`;
