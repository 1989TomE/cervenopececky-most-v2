import { NavLink as NavLinkDefault, NavLinkProps } from "react-router-dom";

const NavLink = (props: NavLinkProps) => {
  return <NavLinkDefault {...props} activeClassName="active" exact />;
};

export default NavLink;
