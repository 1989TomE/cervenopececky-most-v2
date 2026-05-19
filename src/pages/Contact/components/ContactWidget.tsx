import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ContactWidget = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContactWidget;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.greyLight};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
