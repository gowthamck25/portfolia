import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.75px;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  extraSmall: css`
    font-size: 1.6rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    background-color: var(--color-grey-750);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: var(--color-grey-900);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  link: css`
    color: var(--color-grey-500);
    letter-spacing: 0.25px;
    font-weight: 500;
    background: none;

    &:hover,
    &:focus {
      color: var(--color-grey-800);
      outline: none;
      outline-offset: 0;
    }

    &:active {
      color: var(--color-indigo-500);
    }
  `,

  formButton: css`
    background-color: #45260a;
    color: #fdf2e9;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: #301b07;
    }
  `,
};

const Button = styled.button`
  border: none;
  transition: all 0.3s;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "small",
  variation: "primary",
};

export default Button;
