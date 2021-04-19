import ImageLink from "./ImageLink";
import { Page, homePages } from "@src/pages/index";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      {homePages
        .filter((route) => route.route !== Page.Home)
        .map((r) => {
          const { route, imageSource, label, icon } = r;

          return (
            <ImageLink
              key={label}
              to={route}
              imageSource={imageSource}
              icon={icon}
              label={label}
            />
          );
        })}
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;
