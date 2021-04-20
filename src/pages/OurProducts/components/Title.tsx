import styled from "styled-components";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return <Wrapper>{title}</Wrapper>;
};

const Wrapper = styled.div`
  font-family: "barlow";
  font-size: 2rem;
  color: ${(props) => props.theme.colors.redLight};
  margin-top: 1.5rem;
`;
