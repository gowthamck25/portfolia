import styled from "styled-components";

const Duration = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-600);

  @media (max-width: 27em) {
    font-size: 1.4rem;
  }

  @media (max-width: 20em) {
    font-size: 1.2rem;
  }
`;

export default Duration;
