import styled from "styled-components";

const SideBarStyledNavStyledNav = styled.nav.attrs({
  className: "sidebar-nav",
})`
  padding: 0 2rem;

  @media (max-width: 65em) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--color-grey-0);
    z-index: 1;

    transition: 0.5s all ease-in;
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

export default SideBarStyledNavStyledNav;
