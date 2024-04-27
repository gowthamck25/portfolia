import styled from "styled-components";

const Input = styled.input`
  /* border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem; */
  width: 100%;
  padding: 1.2rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: var(--color-grey-500);
  }

  @media (max-width: 20em) {
    font-size: 1.4rem;
  }
`;

export default Input;
