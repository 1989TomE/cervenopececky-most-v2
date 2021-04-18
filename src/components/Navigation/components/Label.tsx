import styled from "styled-components";

type Props = {
  label: string;
};

const Label = ({ label }: Props) => {
  return <Wrapper>{label}</Wrapper>;
};

export default Label;

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.redLight};
  font-size: 15px;
`;
