import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  primaryColor?: boolean;
  bold?: boolean;
  smallFontSize?: boolean;
  height?: string;
  marginTop?: string;
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
  text-align: justify;
  padding-bottom: 0.5rem;
  min-height: ${(props) => props.height || undefined};
  margin-top: ${(props) => props.marginTop || undefined};

  ${tabletMediaQuery} {
    min-height: auto;
    padding-bottom: 0rem;
    margin-bottom: 0.5rem;
  }
`;
