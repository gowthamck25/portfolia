import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkURL = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-indigo-300);
    padding-bottom: 1px;
    font-weight: 500;
    transition: all 0.3s;
  }

  &:hover {
    color: var(--color-indigo-600);
    border-bottom: 1px solid var(--color-indigo-600);
  }
`;

export default NavLinkURL;
