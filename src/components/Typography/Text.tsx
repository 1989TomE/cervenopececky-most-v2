import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
};

export const Text = ({ children, primary = false }: Props) => {
  return <Wrapper primary={primary}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ primary: boolean }>`
  font-family: "roboto";
  color: ${(props) =>
    props.primary ? props.theme.colors.redLight : undefined};
  padding: 0.5rem;
  text-align: justify;
`;
