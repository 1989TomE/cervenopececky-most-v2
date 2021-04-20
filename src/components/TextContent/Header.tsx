import styled from "styled-components";

type Props = {
  title: string;
  primary?: boolean;
};

export const Header = ({ title, primary = false }: Props) => {
  return <Wrapper primary={primary}>{title}</Wrapper>;
};

const Wrapper = styled.div<{ primary: boolean }>`
  font-family: "barlow";
  font-size: ${(props) => props.theme.fontSize.header};
  color: ${(props) =>
    props.primary ? props.theme.colors.redLight : undefined};
  margin-top: 1rem;
  height: 5rem;
`;
