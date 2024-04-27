import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 8.6rem;
      font-weight: 600;
      color: var(--color-orange-800);

      @media (max-width: 65em) {
        font-size: 6.2rem;
      }

      @media (max-width: 49em) {
        font-size: 6.2rem;
      }

      @media (max-width: 27em) {
        font-size: 6.2rem;
      }

      @media (max-width: 20em) {
        font-size: 5.2rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 6.2rem;
      font-weight: 600;
      position: relative;
      color: var(--color-orange-800);
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 5.2rem;
      font-weight: 600;
      color: var(--color-grey-800);

      @media (max-width: 65em) {
        font-size: 3.6rem;
      }

      @media (max-width: 49em) {
        font-size: 3.6rem;
      }

      @media (max-width: 27em) {
        font-size: 3rem;
      }

      @media (max-width: 20em) {
        font-size: 2.4rem;
      }
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      color: var(--color-grey-750);

      @media (max-width: 27em) {
        font-size: 2.4rem;
      }

      @media (max-width: 20em) {
        font-size: 2rem;
      }
    `}
`;

export default Heading;
