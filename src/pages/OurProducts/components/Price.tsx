import styled from "styled-components";

type Props = {
  value: string;
};

export const Price = ({ value }: Props) => {
  return <Wrapper>{value}</Wrapper>;
};

const Wrapper = styled.div`
  font-family: "barlow";
  font-size: 2rem;
  margin-top: 0.25rem;
`;
