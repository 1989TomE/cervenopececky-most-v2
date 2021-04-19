import styled from "styled-components";

type Props = {
  title: string;
};

export const Paragraph = ({ title }: Props) => {
  return <Wrapper>{title}</Wrapper>;
};

const Wrapper = styled.div`
  font-family: "barlow";
  font-size: 20px;
`;
