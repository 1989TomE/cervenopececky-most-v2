import styled from "styled-components";

type Props = {
  title: string;
  primary?: boolean;
  marginTop?: string;
};

type StyleProps = Omit<Props, "title">;

export const Header = (props: Props) => {
  const { title, ...styleProps } = props;

  return <Wrapper {...styleProps}>{title}</Wrapper>;
};

const Wrapper = styled.h1<StyleProps>`
  font-family: "barlow";
  font-size: ${(props) => props.theme.fontSize.header};
  color: ${(props) =>
    props.primary ? props.theme.colors.redLight : undefined};
  margin-top: ${(props) => props.marginTop || "2rem"};
`;
