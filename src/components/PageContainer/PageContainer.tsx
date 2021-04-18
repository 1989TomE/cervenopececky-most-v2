import styled from "styled-components";
import homeBackgroundImage from "@root/assets/webBackground.jpg";

type Props = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeBackgroundImage});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;
`;
