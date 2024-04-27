import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkProviderBox = styled(NavLink)`
  padding: 3.2rem;

  &:link,
  &:visited {
    letter-spacing: 0.25px;
    transition: all 0.3s;
    /* transition: all 1s; */
  }

  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 24em) {
    padding: 3.2rem 2rem;
  }
`;

export default NavLinkProviderBox;
