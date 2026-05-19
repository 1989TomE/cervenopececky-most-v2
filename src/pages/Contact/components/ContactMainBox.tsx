import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ContactMainBox = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContactMainBox;

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 0;
  box-sizing: border-box;
`;
