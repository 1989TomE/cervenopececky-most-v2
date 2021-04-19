import styled from "styled-components";

type Props = {
  title: string;
  primary?: boolean;
};

export const Header = ({ title, primary = true }: Props) => {
  return <Wrapper primary>{title}</Wrapper>;
};

const Wrapper = styled.div<{ primary: boolean }>`
  font-family: "barlow";
  font-size: 20px;
  color: ${(props) => (props.primary ? "black" : props.theme.colors.redLight)};
`;
