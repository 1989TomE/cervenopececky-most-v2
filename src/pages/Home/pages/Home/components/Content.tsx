import ImageLink from "./ImageLink";
import PageColumn from "@src/components/PageColumn/PageColumn";
import { HomeRoute, homeRoutes } from "@src/pages/Home/index";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      {homeRoutes
        .filter((route) => route.route !== HomeRoute.Home)
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
