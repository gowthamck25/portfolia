import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderNavStyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-500);
    font-size: 1.8rem;
    letter-spacing: 0.25px;
    font-weight: 500;
    transition: all 0.3s;
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-indigo-500);
  }

  &:hover {
    color: var(--color-grey-800);
  }
`;

export default HeaderNavStyledNavLink;
