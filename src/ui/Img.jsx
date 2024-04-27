import styled, { css } from "styled-components";

const types = {
  heroPic: css`
    height: 35rem;

    @media (max-width: 65em) {
      height: 30rem;
    }

    @media (max-width: 49em) {
      height: 25rem;
      /* width: 90%; */
      order: 1;
    }

    @media (max-width: 27em) {
      height: 23rem;
      order: 1;
      width: auto;
    }

    @media (max-width: 20em) {
      height: 20rem;
    }
  `,
  homeHeadingPic: css`
    height: 4rem;

    @media (max-width: 49em) {
      height: 3.3rem;
    }

    @media (max-width: 27em) {
      height: 3rem;
    }

    @media (max-width: 20em) {
      height: 2.4rem;
    }
  `,
  skillLogo: css`
    height: 2.4rem;

    @media (max-width: 27em) {
      height: 2rem;
    }
  `,
  project: css`
    height: 16rem;

    @media (max-width: 65em) {
      height: 22rem;
    }

    @media (max-width: 27em) {
      height: 16rem;
    }

    @media (max-width: 24em) {
      height: 14rem;
    }
  `,
  miniProject: css`
    height: 20rem;

    @media (max-width: 82em) {
      height: 18rem;
    }

    @media (max-width: 65em) {
      height: 25rem;
    }

    @media (max-width: 27em) {
      height: 22rem;
    }

    @media (max-width: 20em) {
      height: 18rem;
    }
  `,
  logo: css`
    height: 7.5rem;

    @media (max-width: 27em) {
      height: 6rem;
    }

    @media (max-width: 20em) {
      height: 5rem;
    }
  `,
  formImg: css`
    height: 100%;
    opacity: 0.35;
  `,
};

const Img = styled.img`
  ${(props) =>
    css`
      border-radius: ${props?.borderRadius};
    `}

  ${(props) => types[props.type]}
  width: auto;
`;

export default Img;
