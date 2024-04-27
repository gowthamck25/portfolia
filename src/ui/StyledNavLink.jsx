import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-500);
    letter-spacing: 0.5px;
    transition: all 0.3s;

    ${(props) =>
      props.isFooterLink
        ? css`
            font-weight: 400;
            font-size: 1.4rem;

            @media (max-width: 20em) {
              font-size: 1.2rem;
            }
          `
        : css`
            font-weight: 500;
            font-size: 1.6rem;
          `}
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-indigo-100);
  }

  &:hover {
    ${(props) =>
      props.isFooterLink
        ? css`
            color: var(--color-grey-700);
          `
        : css`
            color: var(--color-grey-800);
          `};
  }

  & svg {
    width: 2.6rem;
    height: 2.6rem;
    transition: all 0.3s;

    @media (max-width: 27em) {
      width: 2.4rem;
      height: 2.4rem;
    }

    @media (max-width: 20em) {
      height: 2rem;
      width: 2rem;
    }
  }
`;

export default StyledNavLink;
