import { PageProps } from "@src/pages/index";
import styled from "styled-components";
import NavLink from "./NavLink";

const NavItem = ({ route, label, icon }: PageProps) => {
  return (
    <Wrapper>
      <NavLink to={route}>
        <img src={icon} />
        <div>{label}</div>
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;

const Wrapper = styled.li`
  flex: 1;
  min-width: 80px;
  max-width: 120px;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > img {
      height: 6rem;
    }

    > div {
      color: ${(props) => props.theme.colors.redLight};
      font-size: 15px;
    }
  }

  .active {
    opacity: 0.5;
  }
`;
