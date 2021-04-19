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
  font-size: 3rem;
  color: ${(props) =>
    props.primary ? props.theme.colors.redLight : undefined};
  padding: 0.5rem;
  height: 5rem;
`;
